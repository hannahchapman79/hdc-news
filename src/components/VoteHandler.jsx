import { useEffect, useState } from "react";
import { incrementVotes } from "../../api";

function VoteHandler({ article }) {
    const [incrementedVotes, setIncrementedVotes] = useState(0);

const decrementVote = () => {
    setIncrementedVotes((currVotes) => currVotes - 1);
    incrementVotes(article.article_id, -1).catch(() => {
        setIncrementedVotes((currVotes) => currVotes + 1);
    });
}

const incrementVote = () => {
    setIncrementedVotes((currVotes) => currVotes + 1);
    incrementVotes(article.article_id, 1).catch(() => {
        setIncrementedVotes((currVotes) => currVotes - 1); 
    });
}

return (
    <>
            <h3>Votes:{article.votes + incrementedVotes}</h3>
            <button className="upvote-button" onClick={incrementVote}>Up-vote</button>
            <button className="downvote-button" onClick={decrementVote}>Down-vote</button>
        </>
    )
}

export default VoteHandler;