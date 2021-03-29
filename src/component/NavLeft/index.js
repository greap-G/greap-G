import React, { Component } from 'react'
import {Menu} from 'antd';
import './index.css'
import MenuConfig from './../../config/menuConfig';
const SubMenu=Menu.SubMenu;
export default class index extends Component {
  
       state={
            menuTreeNode:null
        }
   
    componentWillMount(){
        const menuTreeNode=this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
     }
     // 菜单渲染
     renderMenu=(data)=>{
          return data.map((item)=>{
              if(item.children){
                  return (
                      <SubMenu title={item.title} key={item.key}>
                          {this.renderMenu(item.children)}
                      </SubMenu>
                  )
              }
              return <Menu.Item title={item.title} key={item.key} >
                      {item.title}
              </Menu.Item>
          })
     }
    render() {
     let {menuTreeNode}=this.state
        return (
            <div >
               <div className="logo">
                  <img src="/assets/logo-ant.svg" alt=""/>
                  <h1>Imooc MS</h1>
               </div>
      <Menu theme="dark">
      {menuTreeNode}
      </Menu>
            </div>
        )
    }
}
