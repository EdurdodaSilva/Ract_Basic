import React from "react";

export const Title = (title, subtile) => {
    return (
        <div className="section-title">
            <h2>
                {title} <span>{subtile}</span>
            </h2>
        </div>
    );
};
