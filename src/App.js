import logo from './logo.svg';
import './App.css'
import Device from './components/Devices/Device';
import Watch from './components/Watches/Watch';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="app">
      <Device name="Iphone 13 pro  max" price="$800"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
