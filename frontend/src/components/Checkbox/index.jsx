import React from 'react';

import './styles.scss';

/**
 * Custom Checkbox Component
 * @constructor
 */
function Checkbox(props) {
  return (
    <div className="control-group">
      <label className="control control-checkbox">
        {props.label}
        <input type="checkbox" {...props} />
        <div className="control_indicator"></div>
      </label>
    </div>
  );
}

export default Checkbox;
