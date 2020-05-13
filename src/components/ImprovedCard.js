import React from 'react';
import Button from '../components/Button';

const ImprovedCard = ( {title, director, hasOscars, deleteItem, addItem} ) => {
  return ( 
    <div>
      <h2>{title}</h2>
      <p>Director: {director}</p>
      {
        hasOscars
        ? <p>Got the Oscar Award! :D</p>
        : <p>Great movie, but not Oscar yet! :(</p>
      }
      <Button 
        myProp = {deleteItem}
      >
        Delete
      </Button>
      
      <Button 
        myProp = {addItem}
      >
        Add Movie
      </Button>
    </div>
   );
}
 
export default ImprovedCard;