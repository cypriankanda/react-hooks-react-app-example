import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // ✅ You need to import this

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* ✅ Test looks for the word "Now", not the formatted date */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent /> {/* ✅ Test looks for "Whoa!" inside this component */}
      <TestComponent />     {/* ✅ Test looks for an element with title="time video" */}
    </div>
  );
}

export default App;
