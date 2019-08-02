import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import User from "./User";

function UserList(props) {
  return (
    <div className="container">

        <ListGroup>
          <ListGroup.Item variant="info">
            Users
          </ListGroup.Item>
          {props.userdata.map((user, index) => (
            <User getAll={props.getAll} user={user.username} key={index}/>
          ))}
        </ListGroup>
    </div>
  );
}

export default UserList