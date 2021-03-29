import React, { Component } from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import Info from './Info';
import Main from './Main';
import Topic from '../route1/Topic';
import About from '../route1/About';
import Home from './Home';
export default class router extends Component {
    render() {
        return (
           <Router>
              <Home>
                   <Route path="/main"  render={()=>
                <Main>
                    <Route exact path="/main/:mainId" component={Info}></Route>
                </Main>
                }></Route>
                   <Route path="/about" component={About}></Route>
                   <Route path="/topics" component={Topic}></Route>
               </Home>
           </Router>
        )
    }
}
