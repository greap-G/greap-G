import React, { Component } from 'react'
import { Row,Col} from 'antd';
import Header from './component/Header';
import Footer from './component/Footer';
import NavLeft from './component/NavLeft';
import './style/common.less';
import 'antd/dist/antd.css';
import  Home from './pages/home'
export default class Admin extends Component {
    render() {
        return (
                <Row className="container">
            <Col span={4} className="nav-left">
                <NavLeft/>
            </Col>
            <Col span={20} className="main">
               <Header/>
               <Row className="content">
              {/* {this.props.children} */}
             <Home/>
               </Row>
               <Footer/>
            </Col>
            </Row>
        )
    }
}
