
import './App.css';
import Header from './components/Header';
import MenuCards from './components/MenuCards';
import { why } from './utils/data';


function App() {
  return (
    <div className="App">
      <div className="title">
        <Header text="Why Globuzzer" />
      </div>
      <div className="why">
        <Header text={why} />
      </div>
      <div>
        <MenuCards />
      </div>
    </div>
  );
}

export default App;
