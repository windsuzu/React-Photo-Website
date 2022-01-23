import React from "react";

const Picture = ({ data }) => {
    return (
        <div className="picture">
            <p>{data.photographer}</p>
            <img src={data.src.medium} alt={data.alt} title={data.alt} />
            <a target="_blank" href={data.src.large}>
                Download Image
            </a>
        </div>
    );
};

export default Picture;
