import { useState, useEffect, useRef } from 'react';
// import { BrowserRouter, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import WhyGlobuzzer from './components/WhyGlobuzzer/WhyGlobuzzer';
import Footer from './components/Footer/Footer';
import AnchorContextProvider from './contexts/AnchorContext';
import ContactContextProvider from './contexts/ContactContext';
//import SignUp from './components/SignUp/SignUp';
// import background from './images/image_background.png';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  // const location = useLocation();
  // const { pathname } = location;

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div id="top">
    <ContactContextProvider>
      <AnchorContextProvider>
        <Navbar width={width} />
        <Header width={width}/>
        <WhyGlobuzzer />
        <Footer width={width} />
      </AnchorContextProvider>
    </ContactContextProvider>
    </div>
  );
}

export default App;
