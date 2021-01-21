import "../App.css";
import React, { useState, useEffect } from "react";
import { Api } from "../api/index.js";

function CommentList() {
  const [commentsData, setCommentsData] = useState([]);

  Api.get("/getcomments").then(function (result) {

    for (let comment of result) {
      commentsData.push(comment);
    }

    setCommentsData(commentsData);

  });

  // display object
  const commentsFormatted = commentsData.map((comment, i) => {

    let date = Date.parse(comment.created);
    let day = new Intl.DateTimeFormat('en-GB',{weekday:'long'}).format(date);
    let time = new Intl.DateTimeFormat('en-US',{timeStyle: "short"}).format(date);

    return (
      <div key={i} className="comment-container">
        <p className="comment-post">{comment.message}</p>
        <p className="comment-poster">{comment.name} on {day} at {time}</p>
      </div>
    );
  });

  useEffect(() => {



  });

  return (
    <div className="comment-display">
      {commentsFormatted}
    </div>
  );
}

export default CommentList;
