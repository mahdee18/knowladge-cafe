import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {

  if (!props.card || Object.keys(props.card).length === 0) {
    return null;
  }
  const { blogImage, authorImage, authorName, publishDate, title, readTime } = props.card
  console.log(title)
  
  const handleToAddBookmark = props.handleToAddBookmark;

  const handleMarkAsRead= props.handleMarkAsRead;

  return (
    <div>
      <div className="card mt-16">
        <div className="card bg-base-100 shadow-xl">
          <figure className='object-contain'><img src={blogImage} alt="Shoes" /></figure>
          <div className="card-body">
            <div className="header flex justify-between items-center">
              <div className="profile flex">
                <div className="img w-10">
                  <img src={authorImage} alt="Author Image" className='rounded-full' />
                </div>
                <div className="description ml-3">
                  <h4 className='text-lg font-bold'>{authorName}</h4>
                  <p className='text-gray-500'>{publishDate}</p>
                </div>
              </div>
              <div className="bookmark">
                <p>{readTime} min read <button onClick={()=>handleToAddBookmark(props.card)}> <FontAwesomeIcon className='text-2xl' icon={faBookmark} /></button> </p>
              </div>
            </div>
            <h2 className="card-title text-3xl">{title}</h2>
            <span className='text-blue-700 font-semibold'>
            <button className='underline' onClick={()=>handleMarkAsRead(props.card)}>Mark as read</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
