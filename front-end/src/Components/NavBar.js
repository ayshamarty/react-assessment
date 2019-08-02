import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

import {Navbar, Button} from "reactstrap";
import SignUp from "./SignUp";

class NavBar extends Component {
      constructor() {
    super();
    this.state = {
      userdata: [],
    };
  }
render() {
    return (
      <div>
        <Router>
          <Navbar color="dark" light expand="md">
            <Button id="user-button">
              <Link className="link" to="/users">
                Users
              </Link>
            </Button>
            <Button id="login-button">
              <Link className="link" to="/login">
                Login
              </Link>
            </Button>
            <Button id="signup-button" >
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </Button>
          </Navbar>
          <br />

           <Route exact path="/" /> 
          <Route path="/signup" component={() =><SignUp getAll={this.getAll}/>} />
           {/* <Route
            path="/browse"
            render={props => (
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 bg-info">
                    <RecipeList
                      data={this.state.recipes}
                      getAll={this.getAll}
                      getID={this.getID}
                      recipeID={this.recipeID}
                    />
                  </div>
                  <div className="col-sm-1" />
                  <div className="col-sm-8">
                    <Recipe
                      recipeID={this.state.recipeID}
                      recipes={this.state.recipes}
                      deleteItem={this.deleteItem}
                    />
                  </div>
                </div>
              </div>
            )}
          />  */}
        </Router>
      </div>
    );
  }



}

export default NavBar;