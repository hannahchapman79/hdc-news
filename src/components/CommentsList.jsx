import { useState, useEffect } from "react"
import Loading from "./Loading";
import { getCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";

function CommentsList(props) {

    const { setIsLoading, isLoading } = props;
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
        return <Loading></Loading>;
      } else {
      return (
        <>
          <h2>Comments</h2>
          <section className="comment-list">
            {currentComments.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment}></CommentCard>
            })}
          </section>
        </>
      );
          }


}

export default CommentsList;