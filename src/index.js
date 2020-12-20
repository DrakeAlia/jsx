// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:'

    return (
        <div>
        <label className="label" htmlFor="name">
            {labelText}
        </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
            {buttonText.text}
        </button>
    </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// --------------------------------------------------------------------------------------------------------------------
// -NOTES-
// --------------------------------------------------------------------------------------------------------------------
// Component Nesting = A component can be shown inside of another 
// Component Resuability = We want to make components that can be easily reused through out our application 
// Component Configuration = We should be able to configure a component when it is created 