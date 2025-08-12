import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { key: "sibling1" },
      "i am h1 tag from the nested element hii shivam  "
    ),
    React.createElement(
      "h2",
      { key: "sibling2" },
      "i am h2 tag from the nested elment "
    ),
  ])
);
const root = document.getElementById("root");
const root_el = ReactDOM.createRoot(root);
root_el.render(parent);
