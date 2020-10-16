import React from 'react';
import './Card.css'


export const Card = props => {
    return (
  
    <article className="question-wrapper">
    <p>{props.question}</p>
    <img src={props.image} alt="this is an image"/>
    </article>
    )
    }