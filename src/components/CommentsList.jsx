import { useState, useEffect } from "react"
import Loading from "./Loading";
import { getCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";

function CommentsList() {

    const [isLoading, setIsLoading] = useState(false);
    const [currentComments, setCurrentComments] = useState([])
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticleId(article_id).then((comments) => {
            setCurrentComments(comments);
            setIsLoading(false)
        });
    }, []);


 


    if (isLoading) {
        return <Loading/>;
      } else {
      return (
        <>
          <h2>All comments</h2>
        <PostComment article_id={article_id}/>
          <section className="comment-list">
            {currentComments.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment}></CommentCard>
            })}
          </section>
        </>
      )
          }


}

export default CommentsList;