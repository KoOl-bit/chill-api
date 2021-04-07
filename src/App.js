import React, { useState, useEffect } from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./components/Posts";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper"></div>
        </header>
        <main>
          <div className="wrapper">
            <Posts posts={articles} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
