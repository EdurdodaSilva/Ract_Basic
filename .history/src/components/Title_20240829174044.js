import React from "react";

export const Title = (title, subtile) => {
    return (
        <div className="section-title">
            <h2>
                {title} <span>{subTitle}</span>
            </h2>
        </div>
    );
};
