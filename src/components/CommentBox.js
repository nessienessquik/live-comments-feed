import "../App.css";

import React, { useState } from "react";
import { Api } from "../api/index.js";

function CommentBox(props) {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    let commentObj = {
      name: inputs.name,
      message: inputs.message,
    };

    Api.post("/createComment", commentObj)
      .then((data) => {
        alert("comment has been posted");
      })
      .catch((error) => {
        alert("comment has not been posted, please try again");
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="comment-box" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        className="form-input"
        type="text"
        name="name"
        onChange={handleInputChange}
        value={inputs.firstName}
        required
      />
      <textarea
        className="form-input"
        rows="10"
        name="message"
        onChange={handleInputChange}
        value={inputs.message}
        required
      />
      <input className="form-input" type="submit" value="Submit" />
    </form>
  );
}

export default CommentBox;
