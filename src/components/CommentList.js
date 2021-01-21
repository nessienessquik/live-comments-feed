import '../App.css';
import React, { useState, useEffect } from 'react';
import {Api} from '../api/index.js';

function CommentList() {

  useEffect(() => {

    console.log(Api);

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