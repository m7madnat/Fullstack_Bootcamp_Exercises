import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <img src={props.img} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href={props.link}>Find more</a>
      </div>
    </div>
  );
}

export default Card;
