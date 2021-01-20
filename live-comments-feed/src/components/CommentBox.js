import '../App.css';

function CommentBox() {
  return (
    <div className="comment-box">
        <form>
            <label>Name</label>
            <input type="text" name="name" />
            <input type="textarea" name="comment" />
            <input type="submit" value="Comment" />
        </form>
    </div>
  );
}

export default CommentBox;