import React from 'react';
import List from './List';
import './App.css';
import STORE from './STORE';


function App(props) {
  
  //build cardlist
  const cardList1 = props.store.lists[0].cardIds.map(id => {
     return props.store.allCards[id];
  });

  return (
    <div>
      <List
        header={props.store.lists[0].header} 
        cards={cardList1}
        />

    </div>
  );
};

export default App;
