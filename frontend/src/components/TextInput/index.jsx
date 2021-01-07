import React from 'react';

import './styles.scss';

/**
 * Custom Text Input Component
 * @constructor
 */
function TextInput(props) {
  return <input className="text-input" {...props} />;
}

export default TextInput;