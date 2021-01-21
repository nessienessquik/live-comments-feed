import "../App.css";

function CommentList(props) {

  const data = props.data;

  const commentsFormatted = data.map((comment, i) => {

    let date = Date.parse(comment.created);
    let day = new Intl.DateTimeFormat('en-US',{weekday:'long'}).format(date);
    let time = new Intl.DateTimeFormat('en-US',{timeStyle: "short"}).format(date);

    return (
      <div key={i} className="comment-container">
        <p className="comment-post">{comment.message}</p>
        <p className="comment-poster">{comment.name} on {day} at {time}</p>
      </div>
    );
  });

  return (
    <div className="comment-display">
      {commentsFormatted}
    </div>
  );
}

export default CommentList;
