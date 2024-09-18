import { useContext } from "react";
import { UserContext } from "../user";
import { deleteComment } from "../../api";
import { useState } from "react"
import Lottie from "lottie-react"
import loadingAnimation from "../components/loading-animation.json"
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <Lottie className="loading-animation" animationData={loadingAnimation} loop={true}/>
     </div>
      </>
      )
}
else {

  const date = new Date(comment.created_at)
  const readableDate = date.toLocaleDateString('en-UK', { year: 'numeric', month: 'short', day: 'numeric' })

  return (
    <>
      <section className="comment-card">
        <p><span className="comment-author">{comment.author}:</span></p><br></br><p className="comment-text">{comment.body}</p>
        <p>Votes: {comment.votes}</p>
        <p className="comment-date">{readableDate}</p>
        {comment.author === loggedInUser.username && <Button startIcon={<DeleteIcon/>} variant="outlined" onClick={handleClick} value={comment.comment_id}>Delete</Button>}
      </section>
    </>
  );
}
}


export default CommentCard;