import React, { Component } from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom';
import About from './About';
import Main from './Main';
import Topic from './Topic';
export default class Home extends Component {
    render() {
        return (
           <HashRouter>
               <div>
                   <ul>
                       <li>
                           <Link to="/">Home</Link>
                       </li>
                       <li>
                           <Link to="/about">About</Link>
                       </li>
                       <li>
                           <Link to="/topics">Topics</Link>
                       </li>
                   </ul>
                   <hr></hr>
                   <Switch>
                   <Route path="/" exact component={Main}></Route>
                   <Route path="/about" component={About}></Route>
                   <Route path="/topics" component={Topic}></Route>
                   </Switch>
                   
               </div>
           </HashRouter>
        )
    }
}
