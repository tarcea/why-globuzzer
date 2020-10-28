
import './App.css';
import Header from './components/Header';
import MenuCards from './components/MenuCards';
import { why } from './utils/data';


function App() {
  return (
    <div className="App">
      <Header text="Why Globuzzer" />
      <Header text={why} />
      <div className="grid-container">
        <MenuCards />
      </div>
    </div>
  );
}

export default App;
