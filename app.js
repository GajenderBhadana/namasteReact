const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World From React"),
    React.createElement("h2", { id: "subheading" }, "I am an H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello World From React"),
    React.createElement("h2", { id: "subheading" }, "I am an H2 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// const child = React.createElement("div", { id: "child" }, heading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );
