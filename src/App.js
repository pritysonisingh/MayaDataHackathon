import { Switch, BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import NavMenu from './components/NavMenu';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <NavMenu/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
