import React, { useEffect, useState } from 'react';
 
const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/public/KnowladgeCafe.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);

  return (
    <div>
      {

      }
      <h1>Cards are coming :{cards.length}</h1>
    </div>
  );
};


export default Card;