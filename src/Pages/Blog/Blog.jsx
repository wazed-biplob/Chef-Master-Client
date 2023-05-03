import React from "react";
import Header from "../../Shared/Navbar";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="p-0 border" style={{ margin: "20px 60px" }}>
        <h6 className="p-2">
          1. Tell us the differences between uncontrolled and controlled
          components.
          <hr /> Controlled Components are those components which renders
          contents in the UI controlled by their parent components. That means
          the controlled components has contents like props, states etc passed
          down to them from their parents. And Uncontrolled components, on the
          other hand, has their internal data/state management system.
        </h6>
        <hr />
        <h6 className="p-2">
          {" "}
          2. How to validate React props using PropTypes? <hr />
          We need to install npm packages for using PropTypes and then we need
          to import PropTypes and make a components which includes all data
          types in its props. Then we need to return all the components after
          stringifying them and make an object with key-value pair where
          key-values are the data types. Now we have to export this component
          and from another components where we want to validate prop types we
          can just use our previously built component which will validate prop
          types in its props. In case of mismatch, it will show warning.
        </h6>
        <hr />
        <h6 className="p-2">
          3. Tell us the difference between nodejs and express js. <hr /> Node
          is a runtime whereas express js is a node js framework. Node js is
          nothing but Chrome's internal V8 Engine separated from the browser and
          with some customised Code it runs on the backend which makes it
          possible for javascript to run on the backend also. Now, thanks to the
          Node js, we can run server with javascript with the help of node
          framework like express js.
        </h6>
        <hr />
        <h6 className="p-2">
          4. What is a custom hook, and why will you create a custom hook?
          <hr />
          When I don't use React's Pre-built hooks, but have made my own hook
          using naming conventions of creating Custom Hook then it's called or
          known as Custom Hook. I will create custom hook in case I need some or
          any of React's Pre-built hooks many times inside the codebase then for
          gaining efficiency and code reusability I will wrap those hooks with
          necessary functions inside my custom hooks and use it inside my code
          as many times as I need.
        </h6>
        <hr />
      </div>
    </>
  );
};

export default Blog;
