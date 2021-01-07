import React from 'react';

import './styles.scss';

/**
 * Avatar Component
 * @constructor
 */
function Avatar({src, name, style}) {
  // Get initials of name for Avatar
  const getInitials = (name) => {
    let initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  };

  // Render image if available
  // if not render initials
  return src ? (
    <img src={src} alt="avatar" className="avatar-image" style={style} />
  ) : (
    <div className="avatar-initials" style={style}>
      {getInitials(name)}
    </div>
  );
}

export default Avatar;
