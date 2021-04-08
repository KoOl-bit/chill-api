import React, { useState, useEffect } from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./components/Posts";
import Footer from './Footer'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import Meals1 from './Meals1'
import Meals2 from './Meals2'
import Meals3 from './Meals3'


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
        <Header />
        <Switch>
          <Route path ='/components/posts'>
          <Posts posts={articles} />
          </Route>
          <Route path ='/meals2'>
            <Meals2 />
          </Route>
          <Route path ='/meals3'>
            <Meals3 />
          </Route>
          

        </Switch>
      
         <Footer />
    </div>
  );
}

export default App;

//  <Posts posts={articles} />
