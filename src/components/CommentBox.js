import "../App.scss";

function CommentBox() {
  return (
    <form className="comment-box">
      <label>Name</label>
      <input
        className="form-input"
        type="text"
        name="name"
        onChange={(e) => this.handleChange(e)}
        required
      />
      <textarea
        className="form-input"
        rows="10"
        name="comment"
        onChange={(e) => this.handleChange(e)}
      />
      <input className="form-input" type="submit" value="Submit" />
    </form>
  );
}

export default CommentBox;
