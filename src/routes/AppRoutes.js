import React from 'react'
import { 
  Dashboard, 
  ProfilePage, 
  CreateSweepstake, 
  ViewAllSweepstakes,
 } from '../components/layout'
import {
  Home,
  Person,
  Public,
  PlaylistAdd,
} from "@material-ui/icons"

const AppRoutes = [
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: <Home />,
    component: Dashboard,
  },
  {
    path: "/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    icon: <Person />,
    component: ProfilePage,
  },
  // {
  //   path: "/sweepstakes",
  //   sidebarName: "Sweepstakes",
  //   navbarName: "Sweepstakes",
  //   icon: <Public />,
  //   component: ViewAllSweepstakes,
  // },
  {
    path: "/create",
    sidebarName: "Create Sweepstake",
    navbarName: "Create Sweepstake",
    icon: <Public />,
    component: CreateSweepstake
  }
]

export default AppRoutes
