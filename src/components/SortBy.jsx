import { useState } from "react"


export function SortBy({ setSortBy, setOrder }) {

    const [formSortBy, setFormSortBy] = useState("");
    const [formOrder, setFormOrder] = useState("");


    function handleSortByChange(event) {
        const value = event.target.value;
        if (value === "created_at_desc") {
            setFormSortBy("created_at");
            setFormOrder("desc");
        } else if (value === "created_at_asc") {
            setFormSortBy("created_at");
            setFormOrder("asc");
        } else if (value === "votes_desc") {
            setFormSortBy("votes");
            setFormOrder("desc");
        } else if (value === "votes_asc") {
            setFormSortBy("votes");
            setFormOrder("asc");
        } else if (value === "comment_count_asc") {
            setFormSortBy("comment_count");
            setFormOrder("asc");
        } else if (value === "comment_count_desc") {
            setFormSortBy("comment_count");
            setFormOrder("desc");
        }
        else {
            setFormSortBy("");
            setFormOrder("");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSortBy(formSortBy)
        setOrder(formOrder)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Sort by</label>
                <select name="sort_by" onChange={handleSortByChange}>
                    <option value="">Select</option>
                    <option value="created_at_desc">Most Recent</option>
                    <option value="created_at_asc">Oldest</option>
                    <option value="votes_desc">Highest Votes</option>
                    <option value="votes_asc">Lowest Votes</option>
                    <option value="comment_count_desc">Highest Comments</option>
                    <option value="comment_count_asc">Lowest Comments</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </>
    )

}