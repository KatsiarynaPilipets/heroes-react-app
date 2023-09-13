import React from 'react';

function Hero({ name, universe, alterego, occupation, friends, superpowers, url, info }) {
  return (
    <div className="hero">
      <img src={url} alt={name} />
      <h2>{name}</h2>
      <p>Вселенная: {universe}</p>
      <p>Альтер-эго: {alterego}</p>
      <p>Занятие: {occupation}</p>
      <p>Друзья: {friends}</p>
      <p>Суперспособности: {superpowers}</p>
      <p>Информация: {info}</p>
    </div>
  );
}

export default Hero;