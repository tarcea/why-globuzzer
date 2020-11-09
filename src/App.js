import { useState, useEffect } from 'react';
import { BrowserRouter, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import WhyGlobuzzer from './components/WhyGlobuzzer/WhyGlobuzzer';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
// import background from './images/image_background.png';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  const { pathname } = location;

console.log(location.pathname)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
    <BrowserRouter>
    {pathname !== '/signup' && <Navbar width={width} />}
      <Route exact path="/" component={WhyGlobuzzer} />
      <Route path="/signup" component={SignUp} />
    {pathname !== '/signup' && <Footer width={width} />}
    </BrowserRouter>
    </div>
  );
}

export default App;