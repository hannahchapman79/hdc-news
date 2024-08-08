import { useContext } from "react";
import { UserContext } from "../user";
import { deleteComment } from "../../api";
import { useState } from "react"

function CommentCard (props) {
const { comment } = props;
const { loggedInUser, setLoggedInUser } = useContext(UserContext);
const [deletedComment, setDeletedComment] = useState(false);
const [isLoading, setIsLoading] = useState(false);

function handleClick(event) {
  const commentId = event.target.value;
  setIsLoading(true)
  deleteComment(commentId).then(() => {
    setDeletedComment(true)
    setIsLoading(false);
  })
}


if (deletedComment) {
  return <h2>Comment successfully deleted!</h2>
}
if (isLoading) {
  return <h2>Deleting your comment...</h2>;
}
else {
  return (
    <>
      <section className="comment-card">
        <p><span className="comment-author">{comment.author}:</span><br></br>{comment.body}</p>
        <p>Votes:{comment.votes}</p>
        {comment.author === loggedInUser.username && <button onClick={handleClick} value={comment.comment_id}>Delete</button>}
      </section>
    </>
  );
}
}


export default CommentCard;