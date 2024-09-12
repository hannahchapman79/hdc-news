import { useContext } from "react";
import { UserContext } from "../user";
import { deleteComment } from "../../api";
import { useState } from "react"
import Lottie from "lottie-react"
import loadingAnimation from "../components/loading-animation.json"

function CommentCard (props) {
const { comment } = props;
const { loggedInUser, setLoggedInUser } = useContext(UserContext);
const [deletedComment, setDeletedComment] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [isVisible, setIsVisible] = useState(false);

function handleClick(event) {
  const commentId = event.target.value;
  setIsLoading(true)
  deleteComment(commentId).then(() => {
    setDeletedComment(true)
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      }, 2000);
    setIsLoading(false);
  })
}


if (deletedComment) {
  return <>
  {isVisible ? <h2>Comment successfully deleted!</h2> : null}
  </>
}
if (isLoading) {
  return (
     <>
     <div className="loading-container">
    <h2>Deleting your comment...</h2>
      <Lottie className="loading-animation" animationData={loadingAnimation} loop="true"/>
     </div>
      </>
      )
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