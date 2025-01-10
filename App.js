// const heading = React.createElement("h1" , {} , "Hello World By React!!");

// const root = ReactDOM.createRSoot(document.getElementById("root"));
// root.render(heading);


// const head = document.createElement("h1");
// head.innerHTML()="Hi this my file";
// const data = document.getElementById("root");
// data.appendChild(head);

const  parent = React.createElement("div" , {id : "parent"} , [
    React.createElement("div", {id:"child1"},[
        React.createElement("h1" , {} , "This is h1 tag from React"),
        React.createElement("h2" , {} , "This is h2 tag from React")
    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1" , {} , "This is h1 tag from React"),
        React.createElement("h2" , {} , "This is h1 tag from React")
    ])
])


const heading = React.createElement("h1" , null , "Hello World By React!!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

