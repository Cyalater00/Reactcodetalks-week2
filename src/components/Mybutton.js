import React from 'react';


// The MyButton component is a simple function component that returns a <button> element. It currently has no props or state.
const Mybutton = (props) => {
    return(
        <button>
            {props.title}
        </button>
    )
};

export default Mybutton

//props:
//Data passed from parent to child component
//Immutable can't be changed by child
//Changes come from parent component

//State:
// Data managed within a component
// Mutable can be changed by component itself
// Changes come from within component

// The key differences:

// Props are external data, state is internal
// Props are immutable, state can be changed
// Props come from parent, state is managed by component