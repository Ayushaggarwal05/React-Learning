import React from "react";
import ReactDOM from "react-dom/client";


const  parent = React.createElement("div" , {id : "parent"} , [
    React.createElement("div", {id:"child1"},[
        React.createElement("h1" , {} , "I am Learning React"),
        React.createElement("h2" , {} , "From Namaste React")
    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1" , {} , "This is h1 tag from React"),
        React.createElement("h2" , {} , "This is h1 tag from React")
    ])
]);


const heading = React.createElement("h1" , null , "Hello World By React!!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

