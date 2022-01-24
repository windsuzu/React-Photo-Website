import React from "react";

const Search = ({ fetchData, query, setQuery }) => {
    return (
        <div className="search">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                onClick={() => {
                    if (query.length <= 0) return;
                    fetchData();
                    setQuery("");
                }}
            >
                Search
            </button>
        </div>
    );
};

export default Search;
