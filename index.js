const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag from the nested elment "),
    React.createElement("h2", {}, "i am h2 tag from the nested elment "),
  ])
);
const root = document.getElementById("root");
const root_el = ReactDOM.createRoot(root);
root_el.render(parent);
