import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/appbar';
import About from './components/aboutus';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <About/>
    </div>
  );
}

export default App;
