import React from 'react'
import {
  Home,
  Create,
  Event,
  Group,
  LocalAtm,
  Visibility
} from "@material-ui/icons"

const AppRoutes = [
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: <Home />
  },
  {
    path: "/create",
    sidebarName: "Create Sweepstake",
    navbarName: "Create Sweepstake",
    icon: <Create />
  },
  {
    path: "/fixtures",
    sidebarName: "Fixtures and Results",
    navbarName: "Fixtures and Results",
    icon: <Event />
  },
  {
    path: "/groups",
    sidebarName: "Group Tables",
    navbarName: "Group Tables",
    icon: <Group />
  },
  {
    path: "/leaderboard",
    sidebarName: "Leaderboard",
    navbarName: "Leaderboard",
    icon: <LocalAtm />
  },
  {
    path: "/paid",
    sidebarName: "Name & Shame",
    navbarName: "Name & Shame",
    icon: <Visibility />
  }
]

export default AppRoutes
