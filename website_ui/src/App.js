import logo from './logo.svg';
import './App.css';
import testImage from './test.jpg'; // make sure path is correct
import Navbar from './Navbar';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${testImage})` }}>
     <Navbar />
      ...
    </div>
  );
}

export default App;
