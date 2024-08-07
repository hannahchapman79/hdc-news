import { postComment } from "../../api"
import { useState, useEffect } from "react"
import { useContext } from "react";
import { UserContext } from "../user";

function PostComment (props) {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const { article_id } = props
    const [newCommentBody, setNewCommentBody] = useState("")
    const [commentSuccess, setCommentSuccess] = useState(false)
    const [commentFail, setCommentFail] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

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
        postComment(article_id, newComment).then(() => { 
            setNewCommentBody("");
            setCommentSuccess(true);
            setIsLoading(false);
        }).catch(() => {
            setCommentFail(true);
        })

    }


    if (commentSuccess) {
    return <h2>Comment successfully posted!</h2>
    }
    if (commentFail) {
       return <h2>Comment failed to post, please try again..</h2>
    }
    if (isLoading) {
        return <h2>Posting your comment...</h2>;
    }
    else {

    return (
        <>
            <form onSubmit={handleSubmit} >
                <label htmlFor="new-comment-body">Post a comment!</label>
                <textarea  id="new-comment-body"  name="new-comment-body" value={newCommentBody} onChange={handleBodyChange} required></textarea>
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}
}

export default PostComment;