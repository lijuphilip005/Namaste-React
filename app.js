// 1>>  creating attributes

// const heading = React.createElement("h1", {id:"heading"}, "hello world from react");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//  2>> element inside a child div

// const parent =React.createElement("div",{id:"parent"},
//   React.createElement("div",{id:"child"},
//   React.createElement("h1",{},"nested trails"))
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// 3>> more than one elements inside as child div // creating nested elements inside nested div.

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "child inside a parent"),
//     React.createElement("h2", {}, "secondchild inside a parent"),
//     React.createElement("h3", {}, "thirdchild inside a parent"),
//     React.createElement("h4", {}, "fourthchild inside a parent"),
//   ])
// );

//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);

// creating more than one child div inside the parent div

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "child inside a parent"),
//     React.createElement("h2", {}, "secondchild inside a parent"),
//     React.createElement("h3", {}, "thirdchild inside a parent"),
//     React.createElement("h4", {}, "fourthchild inside a parent"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "child 2 inside a parent"),
//     React.createElement("h2", {}, "secondchild inside a parent"),
//     React.createElement("h3", {}, "thirdchild inside a parent"),
//     React.createElement("h4", {}, "fourthchild inside a parent"),
//   ]),
// ]);

// const root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);

 // 4 installing and importing react module and removing cdn 
 

//  import React from "react"
//  import ReactDOM from "react-dom/client"


//  const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "child inside a parent"),
//     React.createElement("h2", {}, "secondchild inside a parent"),
//     React.createElement("h3", {}, "thirdchild inside a parent"),
//     React.createElement("h4", {}, "fourthchild inside a parent"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "child 2 inside a parent"),
//     React.createElement("h2", {}, "secondchild inside a parent"),
//     React.createElement("h3", {}, "thirdchild inside a parent"),
//   ]),
// ]);





// const root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);

// 5 using jsx

 import React from "react"
 import ReactDOM from "react-dom/client"

 const heading= <h1 className="total"> hello from jsx</h1>

 const total= ReactDOM.createRoot(document.getElementById("root"))

 total.render(heading)






