import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import AppRoutes from '../../routes/AppRoutes'
import { NavLink } from 'react-router-dom'
import { MenuList } from '@material-ui/core';

class Sidebar extends Component{

  constructor(){
    super();
    this.state = {open: false};
  }

  render(){

    const MenuItems = AppRoutes.map((route, index) => { 
      return  <MenuItem key={index} onClick={ () => this.setState({open: !this.state.open}) }
                
              >
                <NavLink to={route.path} activeClassName="active">{route.sidebarName}</NavLink>
              </MenuItem>
    })

    return(
      <div>
        <AppBar
          title="Sweepr"
          onLeftIconButtonClick = { () => this.setState({open: !this.state.open}) }
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
          <MenuList>
            {MenuItems}
          </MenuList>
        </Drawer>
      </div>
    )
  }
}

export default Sidebar