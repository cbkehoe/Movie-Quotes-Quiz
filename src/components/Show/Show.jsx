import React, {  useState } from 'react';

export default function Show() {
    const [show, setShow] = useState(null);
    return (
      <>
        
        <div
          value={show}
          onChange={(evt) => show(evt.target.value)}
          />
      
      </>
    );
  }

