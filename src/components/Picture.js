import React from "react";

const Picture = ({ data }) => {
    return (
        <div className="picture">
            {/* <p>{data.photographer}</p> */}
            <div className="imgContainer">
                <a
                    href={data.src.xlarge || data.src.large}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="hint">Download</div>
                    <img src={data.src.large} alt={data.alt} title={data.alt} />
                </a>
            </div>
            {/* <a target="_blank" rel="noreferrer" href={data.src.large}>
                Download Image
            </a> */}
        </div>
    );
};

export default Picture;
