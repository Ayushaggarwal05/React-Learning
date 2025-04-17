import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Header from "./components/header";
import Body from "./components/Body";
import About from "./components/About";
import Conatct from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// This is a code written in react:-

// const  parent = React.createElement("div" , {id : "parent"} , [
//     React.createElement("div", {id:"child1"},[
//         React.createElement("h1" , {} , "I am Learning React"),
//         React.createElement("h2" , {} , "From Namaste React")
//     ]),
//     React.createElement("div", {id:"child2"},[
//         React.createElement("h1" , {} , "This is h1 tag from React"),
//         React.createElement("h2" , {} , "This is h1 tag from React")
//     ])
// ]);

// this is written in JSX :-

// const jsxheading = (
//     <h1 id="heading">Written in JSX format</h1>
// );
// console.log(jsxheading);

//-------------React ELement---->

// const heading = (
//     <h1 className="first" tabIndex={5}>
//         Namaste React !!!
//     </h1>
// );

// ------------------React Functional Components--->

// const Headingcomponent = () => {
//     return <h2>This is a javascript reaction functional component </h2>
// };
// const Headingcomponent2 = () => <h2>This is a javascript reaction functional component </h2>;   // same as above
// const Headingcomponent3 = () => (
//     <h2>This is a javascript reaction functional component </h2>                // same
// );

// const title = (
//     <h1>Namaste React Using JSX</h1>
// );
// const Title = () => (
//     <h1>Namaste React Using JSX</h1>
// );

// // component composition
// const Headingcomponent = () => (
//     <div id="container">
//         {/*  This is a way to call react component  */}
//         {/* <Title /> */}
//         {/*  we can use {} brackets for use of javascript inside jsx code. */}
//         {/*  this is a way to call react element. */}
//         {/* {title} */}

//         <h1>Namaste React Functional Components</h1>
//     </div>
// );

// Starting of a delivery app like swiggy;

/**
 * header
 *  - Logo
 *  - nav-items
 * body
 *  - search
 *  - restaurant container
 *    - restaurant cards
 *      - img
 *      - name of res , star rating , cuisine , delivery time
 * footer
 *  - copyright
 *  - links
 *  - address
 *  - contact
 */

const AppLayout = () => {
  console.log("hi jsx");
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Conatct />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// const heading = React.createElement("h1" , null , "Hello World By React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);             // element render
root.render(<RouterProvider router={appRouter} />); // component render
