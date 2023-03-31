import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from '../Card/Card';

const Cafe = () => {
  const [cards, setCards] = useState([]);
  const [cardItem, setCardItem] = useState([]);
  const [bookmarkedTitles, setBookmarkedTitles] = useState([]);

  useEffect(() => {
    fetch('KnowladgeCafe.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);

  const handleToAddBookmark = (card) => {
    if (bookmarkedTitles.includes(card.title)) {
      // Show toast message if card is already bookmarked
      toast.error('Card Title is already bookmarked!');
    } else {
        // Add card to card items and title to bookmarked titles
        setCardItem([...cardItem, card]);
        setBookmarkedTitles([...bookmarkedTitles, card.title]);
    }
  };
    return (
        <div className="flex flex-col lg:flex-row w-full px-4 lg:px-20">
            <div className="card-container lg:w-3/5 xl:w-2/3">
                {
                    cards.map(card => <Card key={card.id} card={card} handleToAddBookmark={handleToAddBookmark}></Card>)
                }
            </div>
            <div className="bookmark-container pt-16 lg:mt-0 lg:ml-6 lg:w-2/5 xl:w-1/3 mx-auto">
                <div className="bookmark-header text-center text-3xl font-bold">
                <h1 className='bg-gray-300 border border-purple-700 text-purple-700 rounded p-7'>Spent time on read :</h1>
                </div>
                <div className="blogs rounded mt-11 p-7 bg-orange-100">
                <h2 className='text-3xl font-bold '>Bookmarked Blogs : {cardItem.length}</h2>
                <ul >
                    {bookmarkedTitles.map((title) => (
                        <li className='bg-white px-3 py-5 rounded m-5 text-xl font-sans' key={title}>{title}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    );
};


export default Cafe;