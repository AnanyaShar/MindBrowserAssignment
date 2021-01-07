import React from 'react';
import {Spinner} from 'react-bootstrap';

/**
 * Loader [Spinner] Component
 * @constructor
 */
function Loading() {
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
      }}>
      <Spinner animation="border" className="color-primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
