import { useState } from "react";
import { incrementVotes } from "../../api";
import { Button, Stack } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

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
            <h3>Votes: {article.votes + incrementedVotes}</h3>
            <div className="vote-handler-container">
            <Button className="upvote-button" onClick={incrementVote} startIcon={<ThumbUpIcon />} >Up-vote</Button>
            <Button className="downvote-button" onClick={decrementVote} startIcon={<ThumbDownIcon />}>Down-vote</Button>
            </div>
        </>
    )
}

export default VoteHandler;