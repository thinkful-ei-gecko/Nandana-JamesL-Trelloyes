import React from 'react';
import List from './List';
import './App.css';
import STORE from './STORE';


function App(props) {
  console.log(props.store)
  
  //build cardlist
//   const cardList1 = props.store.lists[0].cardIds.map(id => {
//      return props.store.allCards[id];
//   });
//   const cardList2 = props.store.lists[1].cardIds.map(id => {
//     return props.store.allCards[id];
//  });
//  const cardList3 = props.store.lists[2].cardIds.map(id => {
//   return props.store.allCards[id];
// });
// const cardList4 = props.store.lists[3].cardIds.map(id => {
//   return props.store.allCards[id];
// });

  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {props.store.lists.map(list => (
              <List
                key={list.id}
                header={list.header}
                cards={list.cardIds.map(id => props.store.allCards[id])}
              />
    ))}
    </div>
  </main>
  );
};

export default App;
