import React from 'react';
import Card from './Card'
import "./list.css";

function List(props){
  return(
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <Card title={props.cards[0].title} content={props.cards[0].content}>
        
      </Card>
      {/* <div class="List-cards">
        {props.card.map(card => 
        < card key={card.id} title={card.title} content={card.content} /> 
        )}; */}
        {/* <button type="button" class="List-add-button">
              + Add Random Card
            </button>
      </div> */}
     </section>
  )
}

export default List;