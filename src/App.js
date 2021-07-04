//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Seafood from './components/Kampeir';


function App() {
  return (
    <>
    <Router>
      <Slider />
      <Navbar />
      <Switch>
      <Route path='/' exact  component={Main}/>
      <Route path='/ارتباط با ما' exact component={Contact}/>
      <Route path='/غذاهای دریایی' exact component={Seafood}/>
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default App;
