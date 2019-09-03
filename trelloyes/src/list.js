import React from 'react';
import card from './card'
import "./list.css";

function list(props){
  return(
    <section class="List">
      <header class="List-header">
        <h2>{props.header}</h2>
      </header>

      <div class="List-cards">
        {props.card.map(card => 
        < card key={card.id} title={card.title} content={card.content} /> 
        )};
        <button type="button" class="List-add-button">
              + Add Random Card
            </button>
      </div>
     </section>
  )
}