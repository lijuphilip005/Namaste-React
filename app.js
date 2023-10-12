// 1 creating attributes

// const heading = React.createElement("h1", {id:"heading"}, "hello world from react");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// 2 nested attributes
const parent =React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"},
  React.createElement("h1",{},"nested trails"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
