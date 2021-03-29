import React, { Component } from 'react';
import {Row,Col} from 'antd';
import Util from '../../utils/utils';
import axios from 'axios';
import './index.less';

export default class index extends Component {
    state={
        userName:'',
        sysTime:''
    }
    componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })
        setInterval(()=>{
          let sysTime=Util.formateDate(new Date().getTime());
          this.setState({
              sysTime
          })
        },1000)
        this.getWeatherAPIData()
    }
    getWeatherAPIData(){
        // let city="北京";
        axios.get("https://devapi.qweather.com/v7/weather/now?location=101010100&key=60b06b82784346f0b12eb96913ccadc5")
        .then((res)=>{
    
         if(res.data.code==="200"){
           this.setState({
               weather:res.data.now.text,
               dayPictureUrl:res.data.now.icon
            });
         }
        })
    }
    render() {
        let {sysTime,userName,dayPictureUrl,weather}=this.state;
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎,  {userName}</span>
                        <a href="adaf">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb"> 
                    <Col span={4} className="breadcrumb-title">
                      首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{sysTime}</span>
                        <span className="weather-img">
                         <img src={`bw-256/${dayPictureUrl}.png`} alt=""/>
                        </span >
                        <span className="weather-detail">{weather}</span>
                    </Col>
                </Row>
            </div>
           
        )
    }
}
