

function CommentCard (props) {
const { comment } = props;

return (
    <>
      <section className="comment-card">
        <h4>Author: {comment.author}</h4>
        <h4>{comment.body}</h4>
        <p>Votes:{comment.votes}</p>
      </section>
    </>
  );

}


export default CommentCard;