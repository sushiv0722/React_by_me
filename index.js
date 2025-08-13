import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1>this is title component</h1>;

const HeadingComponent = () => (
  <div>
    <TitleComponent />
    <h1>this is heqading componnet</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
