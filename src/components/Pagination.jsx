import { Pagination, Stack, Typography } from '@mui/material';
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function ResultsPagination({ setPage }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageFromUrl = searchParams.get("p") || "1";

    const [paginationPage, setPaginationPage] = useState(pageFromUrl);

    useEffect(() => {
        setPaginationPage(pageFromUrl);
    }, [pageFromUrl]);

    function handleChange(event, value) {
        event.preventDefault();
        setPaginationPage(value)
        setPage(value);
        setSearchParams({ pageFromUrl: paginationPage })
    }

    return (
        <>
            <Stack spacing={2}>
                <Typography>Page: {paginationPage}</Typography>
                <Pagination className="pagination" page={parseInt(paginationPage)} count={5} color="primary" onChange={handleChange} />
            </Stack>
        </>
    )
}