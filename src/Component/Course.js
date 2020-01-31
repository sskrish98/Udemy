import React from 'react';
import '../../src/App.css'

const Course=(props)=>{
    return(
        <div className="App">
            <img src={props.image}/>
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <button className="button">Add to Cart</button>
        </div>
    );
}
export default Course;
