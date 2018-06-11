import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import { withStyles } from '@material-ui/core/styles'
import { MenuList } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import AppRoutes from '../../routes/AppRoutes'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  title: {
    flex: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

const Sidebar = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography 
            className={classes.title}
            variant="title"
            color="inherit"
            noWrap>
            Sweepstakes Machine
          </Typography>
          <Button 
            color="inherit"
            onClick={props.logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer 
        variant="permanent"
        classes={{paper: classes.drawerPaper}}>
        <div className={classes.toolbar} />
        <List>
          {AppRoutes.map((route, i) => {
            return (
              <ListItem
                key={i}
                onClick={() => props.navigateTo(route.path)}
                button>
                <ListItemIcon>
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.sidebarName} />
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

export default withStyles(styles)(Sidebar)