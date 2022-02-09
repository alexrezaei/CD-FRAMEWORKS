import './App.scss';
import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Homepagetext from "./components/Homepagetext.js";
import Accordion from "./components/Accordion.js"
function App() {
  return (
    <div className="App">
      <Nav></ Nav>
      <Hero></Hero>
      <Homepagetext></Homepagetext>
      <Accordion></Accordion>
    </div>
  );
}

export default App;
