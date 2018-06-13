import React from 'react'
import { 
  Dashboard, 
  ProfilePage, 
  CreateSweepstake,
 } from '../components/layout'
import {
  Home,
  Person,
  Public,
  Create,
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
    path: "/create",
    sidebarName: "Create Sweepstake",
    navbarName: "Create Sweepstake",
    icon: <Create />,
    component: CreateSweepstake
  },
  {
    path: "/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    icon: <Person />,
    component: ProfilePage,
  }
]

export default AppRoutes
