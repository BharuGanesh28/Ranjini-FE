import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/appbar';
import Portfolio from './components/portfolio';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Portfolio/>
    </div>
  );
}

export default App;
