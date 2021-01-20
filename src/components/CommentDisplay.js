import '../App.scss';
import React, { useState, useEffect } from 'react';

function CommentDisplay() {

  useEffect(() => {
    console.log('component is mounted');
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

export default CommentDisplay;