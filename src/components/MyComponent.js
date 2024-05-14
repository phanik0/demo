import React from 'react';
import Home from './Home';

const MyComponent = ({message}) => {
    return (
        <>
            <h1>Hello World</h1>
            <p>{message}</p>
            <Home style={
                {
                    "color": "red",
                    "backgroundColor": "black",
                    "width": "200px",
                    "height": "60px",
                    "border": "nono",
                    "borderRadius": "10px",
                    "cursor": "pointer"
                }
            }/>
        </>
    );
};

export default MyComponent;