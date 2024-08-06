

function CommentCard (props) {
const { comment } = props;

return (
    <>
      <section className="comment-card">
        <p><span className="comment-author">{comment.author}:</span><br></br>{comment.body}</p>
        <p>Votes:{comment.votes}</p>
      </section>
    </>
  );

}


export default CommentCard;