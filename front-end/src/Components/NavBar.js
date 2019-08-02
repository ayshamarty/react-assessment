import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

import { Navbar, Button } from "reactstrap";

import SignUp from "./SignUp";
import UserList from "./UserList";
import Login from "./Login";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      userdata: []
    };
  }

  getAll = () => {
    axios.get("http://localhost:5000/user/all").then(response => {
      this.setState({
        userdata: response.data
      });
    });
  };

  componentDidMount() {
    this.getAll();
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
            <Button id="signup-button">
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </Button>
          </Navbar>
          <br />

          <Route exact path="/" />

          <Route
            path="/login"
            component={Login}
          />

          <Route
            path="/signup"
            component={() => <SignUp getAll={this.getAll} />}
          />

          <Route
            path="/users"
            render={props => (
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 bg-info">
                    <UserList
                      userdata={this.state.userdata}
                      getAll={this.getAll}
                    />
                  </div>
                </div>
              </div>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default NavBar;
