import { useState, useEffect } from "react"
import Loading from "./Loading";
import { getCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";

function CommentsList( {article} ) {

    const [isLoading, setIsLoading] = useState(false);
    const [currentComments, setCurrentComments] = useState([])
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticleId(article_id).then((comments) => {
            setCurrentComments(comments);
            setIsLoading(false)
        });
    }, [article_id]); 


    if (isLoading) {
        return <Loading/>;
      } else {
      return (
        <>
        <PostComment article_id={article_id} currentComments={currentComments} setCurrentComments={setCurrentComments}/>
          <h2>Comments ({article.comment_count})</h2>
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