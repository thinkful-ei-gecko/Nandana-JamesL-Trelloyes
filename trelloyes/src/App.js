import React from 'react';
import List from './List';
import './App.css';
import STORE from './STORE';


function App(props) {
  
  //build cardlist
  const cardList1 = props.store.lists[0].cardIds.map(id => {
     return props.store.allCards[id];
  });
  const cardList2 = props.store.lists[1].cardIds.map(id => {
    return props.store.allCards[id];
 });
 const cardList3 = props.store.lists[2].cardIds.map(id => {
  return props.store.allCards[id];
});
const cardList4 = props.store.lists[3].cardIds.map(id => {
  return props.store.allCards[id];
});

  return (
    <main class="App">
    <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">
      
      <List
    
        header={props.store.lists[0].header} 
        cards={cardList1}
      />
      <List
    
    header={props.store.lists[1].header} 
    cards={cardList2}
  />
     <List
    
    header={props.store.lists[2].header} 
    cards={cardList3}
  />
       <List
    
    header={props.store.lists[3].header} 
    cards={cardList4}
  />

    </div>
    </main>
  );
};

export default App;
