import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisUser: [],
      users: this.props.userdata,
      errors: "",
      passMatch: ""
    };
  }

  getOne = (userToGet, passwordToGet) => {
    axios
      .get(`http://localhost:5000/user/name/${userToGet}`)
      .then(response => {
        this.setState({
          thisUser: response.data
        });

        let thisUser = this.state.thisUser;
        let notifier = document.getElementById("notifier");
        console.log(thisUser[0].username);

        thisUser.map((user, index) => {
          if (user.password === passwordToGet) {
            this.setState({
              passMatch: "match"
            });
            return ""
          } else {
            this.setState({
              errors: "no match"
            });
          }
          if (this.state.passMatch === "") {
            notifier.innerText =
              "username and password combination not found, please try again";
          } else {
            notifier.innerText = "logged in";
          }
        });
      })
      .catch(err => {
        let notifier = document.getElementById("notifier");
        notifier.innerText = "please enter a valid username";
      });
  };

  loginUser = e => {
    e.preventDefault();
    const userlogin = {
      username: e.target[0].value,
      password: e.target[1].value
    };

    this.getOne(userlogin.username, userlogin.password);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.loginUser}>
          <h3>Please enter your details to login</h3>
          <br />
          <p>username</p>
          <input id="input-username" />
          <br />
          <p>password</p>
          <input type="password" id="input-password" />
          <button type="submit">Login</button>
        </form>
        <div>
          <span id="notifier" />
        </div>
      </div>
    );
  }
}

export default Login;
