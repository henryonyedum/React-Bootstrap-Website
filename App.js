import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import About from './components/pages/About';
function App() {
  return (
    <Router>
      <Switch>
        <Route path= "/" exact component={Home} />
        <Route path= "/Contact" component={Contact} />
        <Route path= "/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
