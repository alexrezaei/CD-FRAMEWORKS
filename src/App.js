import "./App.scss";
import { Button, Alert, Breadcrumb, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Homepagetext from "./components/Homepagetext.js";
import Accordion from "./components/Accordion.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import News from "./News";
import Contact from "./contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <Hero></Hero>
    <Homepagetext></Homepagetext>
    <Accordion></Accordion>
  </div>
);

export default App;
