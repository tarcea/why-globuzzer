
import './App.css';
import Header from './components/Header';
import MenuCards from './components/MenuCards';
import { why } from './utils/data';


function App() {
  return (
    <div>
      <header className="main-container">
        <div className="title">
          <Header text="Why Globuzzer" />
        </div>
        <div className="small-line"></div>
        <div className="why">
          <Header text={why} />
        </div>
        <div className="big-line"></div>
        <div className="menu">
          <MenuCards />
        </div>
      </header>
    </div>
  );
}

export default App;
