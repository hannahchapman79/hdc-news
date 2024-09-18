import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function ResultsPerPage({ setResultsPerPage }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const limitFromUrl = searchParams.get("limit") || "10";

    const [formResultsPerPage, setFormResultsPerPage] = useState(limitFromUrl);

    useEffect(() => {
        setFormResultsPerPage(limitFromUrl);
    }, [limitFromUrl]);

    function handleLimitChange(event) {
        setFormResultsPerPage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSearchParams({ limit: formResultsPerPage });
        setResultsPerPage(formResultsPerPage);
    }

    return (
        <>
            <div className="limit-results">
                <form onSubmit={handleSubmit} className="limit-results-form">
                    <label>Results per page</label>
                    <select
                        name="limit-results"
                        onChange={handleLimitChange}
                        value={formResultsPerPage}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}
