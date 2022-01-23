import React, { useEffect, useState } from "react";
import Picture from "../components/Picture";
import Search from "../components/Search";
import * as api from "../api/pexels";

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(
        () =>
            api
                .fetchPexelsData(api.curated_url())
                .then((res) => res.json())
                .then((data) => setData(data.photos)),
        []
    );

    return (
        <>
            <Search />
            <div className="pictures">
                {data && data.map((d) => <Picture data={d} />)}
            </div>
        </>
    );
};

export default Homepage;
