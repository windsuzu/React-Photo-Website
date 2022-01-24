import React, { useEffect, useState } from "react";
import Picture from "../components/Picture";
import Search from "../components/Search";
import * as api from "../api/pexels";

const Homepage = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [nextPage, setNextPage] = useState("");

    const fetchData = (url) => {
        api.fetchPexelsData(url)
            .then((res) => res.json())
            .then((data) => {
                setNextPage(data.next_page);
                setData(data.photos);
            });
    };

    const loadMoreData = () => {
        api.fetchPexelsData(nextPage)
            .then((res) => res.json())
            .then((data) => {
                setNextPage(data.next_page);
                setData((pre) => [...pre, ...data.photos]);
            });
    };

    useEffect(() => fetchData(api.curated_url()), []);

    return (
        <main>
            <Search
                fetchData={() => fetchData(api.search_url(query))}
                query={query}
                setQuery={setQuery}
            />
            <div className="pictures">
                {data.map((d) => (
                    <Picture data={d} key={`${d.id}${new Date().getTime()}`} />
                ))}
            </div>
            {nextPage && (
                <div className="loadmore">
                    <button onClick={loadMoreData}>Load More</button>
                </div>
            )}
        </main>
    );
};

export default Homepage;
