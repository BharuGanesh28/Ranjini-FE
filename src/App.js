import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/appbar';
import About from './components/aboutus';
import Portfolio from './components/portfolio';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
