import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Cafe = () => {
    const [cards, setCards] = useState([])

    const [cardItem, setCardItem] = useState([])
    const [bookmarkedTitle, setBookmarkedTitle] = useState([])

    useEffect(() => {
        fetch('/public/KnowladgeCafe.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    const handleToAddBookmark = (card) => {
        let newCard = [...cardItem, card]
        setCardItem(newCard)

        setBookmarkedTitle([...bookmarkedTitle, card.title])

    }
    return (
        <div className="flex flex-col lg:flex-row w-full px-4 lg:px-20">
            <div className="card-container lg:w-3/5 xl:w-2/3">
                {
                    cards.map(card => <Card key={card.id} card={card} handleToAddBookmark={handleToAddBookmark}></Card>)
                }
            </div>
            <div className="bookmark-container mt-16 lg:mt-0 lg:ml-6 lg:w-2/5 xl:w-1/3 mx-auto">
                <div className="bookmark-header text-center text-3xl font-bold">
                <h1>Spent time on read :</h1>
                <h2>Bookmarked Blogs : {cardItem.length}</h2>
                </div>
                <ul>
                    {bookmarkedTitle.map((title) => (
                        <li key={title}>{title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Cafe;