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
    this.setState({
      errors: "",
      passMatch: ""
    });
    axios
      .get(`http://localhost:5000/user/name/${userToGet}`)
      .then(response => {
        this.setState({
          thisUser: response.data
        });

        let thisUser = this.state.thisUser;
        let notifier = document.getElementById("notifier");
        // console.log(thisUser[0]);

        thisUser.forEach(user => {
          if (user.password === passwordToGet) {
            this.setState({
              passMatch: "match"
            });
            return "";
          } else {
            this.setState({
              errors: "no match"
            });
          }
        });

        if (this.state.passMatch === "") {
          notifier.style.color = "red";
          notifier.innerText = "incorrect username and password combination";
        } else {
          notifier.style.color = "black";
          notifier.innerText = "logged in";
        }
      })
      .catch(err => {
        let notifier = document.getElementById("notifier");
        notifier.style.color = "red";
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
