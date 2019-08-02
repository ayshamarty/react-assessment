import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: [],
      password: "",
      password2: ""
    };
  }

  createUser = e => {
    e.preventDefault();
    const newUser = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      password2: e.target[3].value
    };

    let notifier = document.getElementById("notifier");

    axios
      .post("http://localhost:5000/user/createuser", newUser)
      .then(response => {
        console.log(response.data);
        this.setState({
          error:response.data
        })
        
        if (
          response.data.email !== newUser.email &&
          response.data.password !== newUser.password
        ) {
          notifier.innerText =
            response.data.email + "\n" + response.data.password;
        } else if (
          response.data.email !== newUser.email &&
          response.data.password === undefined
        ) {
          notifier.innerText = response.data.email;
        } else if (response.data.password !== newUser.password) {
          notifier.innerText = response.data.password;
        } else {
          notifier.innerText = "user added";
        }
      })
      .catch(err => {
        notifier.innerText = err;
      });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.createUser}>
          <p>username*</p>
          <input id="create-username" />
          <p>email address*</p>
          <input id="create-email" />
          <p>password*</p>
          <input id="create-password" />
          <p>verify password*</p>
          <input id="verify-password" />
          <button type="submit">Sign Up</button>
        </form>
        <div>
          <span id="notifier" />
        </div>
      </div>
    );
  }
}

export default SignUp;
