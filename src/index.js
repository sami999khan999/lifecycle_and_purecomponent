// // Lifecycle of components

// // In React, the component lifecycle refers to the various stages that a React component goes through from its creation to its removal from the DOM. Understanding the component lifecycle is crucial for managing side effects, handling data fetching, and performing actions at specific points in a component's lifecycle. In React class components, the lifecycle methods are used to define behavior at these different stages.

//============================================================================================================================================//

// // Mounting Phase

// // The mounting phase in React refers to the initial phase in the lifecycle of a React component when it is being created and inserted into the DOM.  //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // 1. constructor(): This is the first method called when an instance of a component is being created. It's typically used for initializing state and binding event handlers. //

// // 2. static getDerivedStateFromProps : static getDerivedStateFromProps is a static method in React class components that allows you to update the component's state based on changes in its props. This method is invoked every time a component is about to receive new props, whether it is mounted initially or receives updates to its props during its lifecycle. //

// // 3. render(): This method is responsible for returning the JSX that represents the component's UI. It's mandatory in every component. //

// // 4. componentDidMount(): This method is called after the component is rendered to the DOM. It's often used for making AJAX requests or setting up subscriptions. //

//============================================================================================================================================//

// //  Updating Phase

// // The updating phase in the React component lifecycle occurs when a component is already mounted, and it receives new props or has its state updated. During this phase, React goes through a series of lifecycle methods in a specific order, allowing you to respond to changes and perform actions accordingly. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // 1. static getDerivedStateFromProps : static getDerivedStateFromProps is a static method in React class components that allows you to update the component's state based on changes in its props. This method is invoked every time a component is about to receive new props, whether it is mounted initially or receives updates to its props during its lifecycle. //

// // 2. shouldComponentUpdate : shouldComponentUpdate is a lifecycle method in React class components that gives you control over whether a component should re-render when its props or state change. It provides a way to optimize rendering performance by allowing you to determine if the component's output should be updated based on changes in its data. //

// // 3. render(): This method is responsible for returning the JSX that represents the component's UI. It's mandatory in every component. //

// // 4. componentDidMount(): This method is called after the component is rendered to the DOM. It's often used for making AJAX requests or setting up subscriptions. //

// // 5. getSnapshotBeforeUpdate - This method allows you to capture a value from the DOM before it potentially changes as a result of a component update. It's often used to preserve scroll positions or other information that could be lost during an update. //

// // 6. componentDidUpdate - It is called automatically by React after a component has been updated, which occurs after the initial render and any subsequent re-renders. //

//============================================================================================================================================//

// // Unmounting phase

// // The unmounting phase in the React component lifecycle occurs when a component is being removed from the DOM.

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // 1. This method is called just before a component is unmounted and removed from the DOM. It's used for cleaning up resources associated with the component, such as event listeners, subscriptions, or timers, to prevent memory leaks and unexpected behavior. //

//============================================================================================================================================//

// // Error handling

// // The error handling phase in the React component lifecycle is responsible for capturing and handling errors that occur during rendering, in lifecycle methods, or within child components. React introduced error boundaries as a way to handle errors gracefully and prevent the entire application from crashing when an error occurs within a component subtree. Error boundaries are special components that you can define in your React application to catch errors in their child components. They are created using class components and rely on two lifecycle methods: static getDerivedStateFromError and componentDidCatch. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // 1. static getDerivedStateFromError(error): This static method is called when a child component of an error boundary throws an error during rendering. It receives the error as its parameter and should return an object to update the component's state. This allows you to render a fallback UI in response to the error. //

// // 2. componentDidCatch(error, info): The componentDidCatch method is called after the child component has thrown an error. It receives the error and an info object as parameters. You can use this method to log the error, send it to a server, or perform any other error handling tasks. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
