import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class NavBar extends Component {
      constructor() {
    super();
    this.state = {
      recipes: [],
      recipeID: ""
    };
  }
}

export default NavBar;