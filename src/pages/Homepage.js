import React, { useEffect, useState } from "react";
import Picture from "../components/Picture";
import Search from "../components/Search";
import * as api from "../api/pexels";

const Homepage = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const fetchData = (url) => {
        api.fetchPexelsData(url)
            .then((res) => res.json())
            .then((data) => setData(data.photos));
    };

    useEffect(() => fetchData(api.curated_url()), []);

    return (
        <>
            <Search
                fetchData={() => fetchData(api.search_url(query))}
                query={query}
                setQuery={setQuery}
            />
            <div className="pictures">
                {data.map((d) => (
                    <Picture data={d} key={d.id} />
                ))}
            </div>
        </>
    );
};

export default Homepage;
