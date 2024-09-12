import { postComment } from "../../api"
import { useState, useEffect } from "react"
import { useContext } from "react";
import { UserContext } from "../user";
import Lottie from "lottie-react"
import loadingAnimation from "../components/loading-animation.json"

function PostComment(props) {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const { article_id, currentComments, setCurrentComments } = props
    const [newCommentBody, setNewCommentBody] = useState("")
    const [commentSuccess, setCommentSuccess] = useState(false)
    const [commentFail, setCommentFail] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    function handleBodyChange(event) {
        setNewCommentBody(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = {
            username: loggedInUser.username,
            body: newCommentBody
        }
        setIsLoading(true)
        postComment(article_id, newComment).then((data) => {
            setNewCommentBody("");
            setCommentSuccess(true);
            setIsVisible(true);
            setTimeout(() => {
            setIsVisible(false);
            }, 2000);
            setIsLoading(false);
            setCurrentComments((prevComments) => [data.data.comment, ...prevComments])
        }).catch(() => {
            setCommentFail(true);
        })
    }
    if (isLoading) {
        return (
            <>
                <div className="loading-container">
                    <h2>Posting your comment...</h2>
                    <Lottie className="loading-animation" animationData={loadingAnimation} loop="true" />
                </div>
            </>
        )
    }
    else {

        return (
            <>
                {commentSuccess && isVisible ? <h2>Comment successfully posted!</h2> : null}
                {commentFail ? <h2>Comment failed to post, please try again..</h2> : null}
                <form onSubmit={handleSubmit} >
                    <label htmlFor="new-comment-body">Post a comment!</label>
                    <textarea id="new-comment-body" name="new-comment-body" value={newCommentBody} onChange={handleBodyChange} required></textarea>
                    <button type="submit" >Submit</button>
                </form>
            </>
        )
    }
}

export default PostComment;