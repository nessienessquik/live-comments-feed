import '../App.css';
import React, { useState, useEffect } from 'react';

function CommentList() {

  useEffect(() => {
    fetch('http://localhost:3001/getcomments')
    .then((data) => {
      console.log(data);
      // this.setState({ data });
    }, (error) => {
      if (error) {
        // handle error here
        console.log(error);
      }
    });
  });

  return (
    <div className="comment-display">
        <div className="comment-container">
          <p className="comment-post">this is my lovely comment</p>
          <p className="comment-poster">by Margot on Thursday at 4pm</p>
        </div>
    </div>
  );
}

export default CommentList;