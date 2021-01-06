package com.assignment.security;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.passay.AllowedCharacterRule;
import org.passay.DictionaryRule;
import org.passay.LengthRule;
import org.passay.MatchBehavior;
import org.passay.PasswordData;
import org.passay.PasswordValidator;
import org.passay.Rule;
import org.passay.RuleResult;
import org.passay.UsernameRule;
import org.passay.WhitespaceRule;
import org.passay.dictionary.ArrayWordList;
import org.passay.dictionary.WordListDictionary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.yaml.snakeyaml.Yaml;

import lombok.Getter;
import lombok.Setter;

@Component
public class PasswordValidationPolicy {
	
	 /**
     * The password validator to validate the passwords.
     */
    private PasswordValidator passwordValidator;

    /**
     * Yaml configuration file, injected by spring.
     */
    @Value("${security.password.policy}")
    private Resource passwordPolicyConfigurationFile;

    /**
     * Validate the given password.
     *
     * @param password - the password to check.
     * @return true if password is good, false otherwise.
     */
    public boolean validatePassword(String username, String password) {
    	passwordValidator = new PasswordValidator(loadRules());
        RuleResult result = passwordValidator.validate(new PasswordData(username, password));
        return result.isValid();
    }

    /**
     * Load rules from the YAML configuration file.
     *
     * @return a list of Rule objects.
     */
    private List<Rule> loadRules() {
        try (InputStream in = passwordPolicyConfigurationFile.getInputStream()) {
            List<Rule> rules = new ArrayList<>();

            Yaml yaml = new Yaml();
            PasswordPolicyConfiguration configuration = yaml.loadAs(in, PasswordPolicyConfiguration.class);
            for (RuleDefinition ruleDefinition : configuration.getRuleDefinitions()) {
                rules.add(ruleDefinition.getRule());
            }
            return rules;
        } catch (IOException ex) {
            throw new IllegalStateException(
                    "Failed to load password validation policy configuration: " + passwordPolicyConfigurationFile);
        }
    }

    @Setter
    @Getter
    public static class PasswordPolicyConfiguration {
        private List<RuleDefinition> ruleDefinitions;
    }

    @Setter
    @Getter
    public static class RuleDefinition {
        private String type;
        private Map<String, Object> properties;

        public Rule getRule() {
            if (type == null) {
                throw new IllegalStateException("Missing required property: type.");
            }

            switch (type) {
                case "Length":
                    return new LengthRule(get("minLength"),get("maxLength"));
                case "AllowedCharacter":
                    return new AllowedCharacterRule(get("characters", String.class).toCharArray(),
                            MatchBehavior.valueOf(get("matchBehavior", "Contains")), get("reportAll"));
                case "Username":
                    return new UsernameRule();
                case "NoWhitespace":
                    return new WhitespaceRule();
                case "Dictionary":
                    String[] words = get("words", new ArrayList<String>()).toArray(new String[0]);
                    return new DictionaryRule(new WordListDictionary(new ArrayWordList(words)));
                default:
                    throw new IllegalStateException("Unknown rule type: " + type);
            }
        }

        private <T> T get(String key) {
            return (T) properties.get(key);
        }

        private <T> T get(String key, T defaultValue) {
            return (T) properties.getOrDefault(key, defaultValue);
        }

		private <T> T get(String key, Class<T> cls) {
            return (T) properties.get(key);
        }
    }

}
