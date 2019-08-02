import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

function User(props) {

      return (
    <div>
      <ListGroup.Item
      >
        {props.user}
      </ListGroup.Item>
    </div>
  );

}

export default User;