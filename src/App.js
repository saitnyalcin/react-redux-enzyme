import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./App.scss";

function App() {
  const tempArray = [
    {
      fName: "Steve",
      lName: "Yalcin",
      age: 91
    }
  ];

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Postsss"
          description="Click the button to render the posts"
          tempArray={tempArray}
        />
      </section>
    </div>
  );
}

export default App;
