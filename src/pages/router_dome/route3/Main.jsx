import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Main extends Component {
    render() {
        return (
         
               <div>
          this is Main page.
          <Link to="/main/test-id">嵌套路由1</Link>
      <br/>
       <Link to="/main/111">嵌套路由2</Link>
        {this.props.children}
               </div>
         
        )
    }
}
