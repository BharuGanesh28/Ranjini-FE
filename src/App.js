import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/appbar';
import About from './components/aboutus';
import Portfolio from './components/portfolio';
import Review from './components/review';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <About/>
      <Portfolio/>

      <Review/>
    </div>
  );
}

export default App;
