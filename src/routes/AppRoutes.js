import React from 'react'
import { 
  Dashboard, 
  AllFixtures,
  CreateSweepstake,
 } from '../components/layout'
import {
  Home,
  Create,
  Event,
  Group
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
    path: "/fixtures",
    sidebarName: "Upcoming Fixtures",
    navbarName: "Upcoming Fixtures",
    icon: <Event />,
    component: AllFixtures
  },
  {
    path: "/leaderboard",
    sidebarName: "Leaderboard",
    navbarName: "Leaderboard",
    icon: <Group />,
    component: AllFixtures
  }
]

export default AppRoutes
