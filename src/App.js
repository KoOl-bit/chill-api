import React, { useState, useEffect } from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./components/Posts";
import Footer from './Footer'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import About from './about'
import Meals3 from './Meals3'
import NotFound from './NotFound'



function App() {
  const [articles, setArticles] = useState([]);
  const { loading, setLoading } = useState(false)

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
          <Route path ='/about'>
            <About posts={articles} />
          </Route>
          <Route path ='/meals3'>
            <Meals3 posts={articles} />
          </Route>
          <Route component={NotFound}/>
        </Switch>
         <Footer />
    </div>
  );
}

export default App;

//  <Posts posts={articles} />
