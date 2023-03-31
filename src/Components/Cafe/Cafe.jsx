import React from 'react';
import Card from '../Card/Card';

const Cafe = () => {
    return (
        <div className="flex flex-row w-full">
            <div className="card-container w-4/5">
                <Card></Card>
            </div>
            <div className="bookmark-container w-1/5">
                {
                <h2>Book marks </h2>
                }
            </div>
        </div>
    );
};


export default Cafe;