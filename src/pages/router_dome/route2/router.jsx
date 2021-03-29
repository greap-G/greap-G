import React, { Component } from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import About from './../route1/About';
import Main from './Main';
import Topic from './../route1/Topic';
import Home from './Home';
export default class router extends Component {
    render() {
        return (
           <Router>
              <Home>
                   <Route path="/main"  render={()=>
                <Main>
                    <Route exact path="/main/a" component={About}></Route>
                </Main>
                }></Route>
                   <Route path="/about" component={About}></Route>
                   <Route path="/topics" component={Topic}></Route>
               </Home>
           </Router>
        )
    }
}
