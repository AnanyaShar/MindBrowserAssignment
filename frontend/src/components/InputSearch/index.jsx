import React, {useRef} from 'react';

import Search from '../../assets/images/search.png';
import './styles.scss';

/**
 * Input Search Component
 * @constructor
 */
function InputSearch({value, onChange}) {
  let textInput = useRef();

  const focusRef = () => {
    textInput.current.focus();
  };

  return (
    <div className="input-search" onClick={focusRef}>
      <img src={Search} alt="Search" className="input-search-image" />
      <input
        ref={(input) => {
          textInput.current = input;
        }}
        value={value}
        onChange={onChange}
        className="input-search-field"
      />
    </div>
  );
}

export default InputSearch;
