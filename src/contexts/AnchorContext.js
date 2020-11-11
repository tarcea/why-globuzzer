import React, { useState, createContext, useRef } from 'react';

export const AnchorContext = createContext();

const AnchorContextProvider = (props) => {
  const [anchors, setAnchors] = useState({
    footer: useRef(null),
    testimonials: useRef(null),
    top: useRef(null)
  });

  return (
      <AnchorContext.Provider value={{...anchors}}>
        {props.children}
      </AnchorContext.Provider>
  );
}

export default AnchorContextProvider;
