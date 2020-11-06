import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import WhyGlobuzzer from './components/WhyGlobuzzer/WhyGlobuzzer';
import Footer from './components/Footer/Footer';
// import background from './images/image_background.png';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);



  return (
    <div>
      <Navbar width={width} />
      <WhyGlobuzzer />
      <Footer width={width} />
    </div>
  );
}

export default App;
