// import library
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import Home from './pages/Home/Home'
import DetailContactPage from "./pages/DetailContactPage/DetailContactPage";

// css
import "./Main.css";

class App extends Component {

  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/contact-detail/:id" component={DetailContactPage} />
        </>
      </Router>
    );
  }
}

export default App;
