import React from "react";


function Login(props) {

let users = props.userdata;


 let loginUser = e => {
    e.preventDefault();
    const userlogin = {
      username: e.target[0].value,
      password: e.target[1].value
    };

  let notifier = document.getElementById("notifier");
  let notification ="";

  users.forEach(user => {
    if (userlogin.username === user.username && userlogin.password === user.password){
      notification = "yes"
    }
    else{
      notification = "no"
    }
    notifier.innerText = notification
  })


  };


    return (
      <div className="container">
        <form onSubmit={loginUser}>
          <h3>Please enter your details to login</h3>
          <br />
          <p>username</p>
          <input id="create-username" />
          <br />
          <p>password</p>
          <input id="create-password" />
          <button type="submit">Login</button>
        </form>
        <div>
          <span id="notifier" />
        </div>
      </div>
    );
  }

export default Login;
