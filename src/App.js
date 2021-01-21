import React, { useState, useEffect } from "react";
import { Api } from "./api/index.js";

import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

import "./App.css";

function App() {
  const [commentsData, setCommentsData] = useState([]);
  // const [commentUpdate, setCommentUpdate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      Api.get("/getcomments")
        .then(function (result) {
          let commentsArr = [];

          for (let comment of result) {
            commentsArr.push(comment);
          }

          setCommentsData(commentsArr);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("comment updated");
  // }, [commentUpdate]);

  // setCommentUpdate(true);

  return (
    <div className="App">
      <CommentBox commentUpdate="value" />
      <CommentList data={commentsData} />
    </div>
  );
}

export default App;
