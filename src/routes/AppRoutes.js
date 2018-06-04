import { 
  Dashboard, 
  ProfilePage, 
  CreateSweepstake, 
  ViewAllSweepstakes
 } from '../components/layout'
import {
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "@material-ui/icons"

const AppRoutes = [
  {
    path: "/",
    sidebarName: "Dashboard",
    navbarName: "Sweepr Dashboard",
    icon: Person,
    component: Dashboard
  },
  {
    path: "/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    icon: Person,
    component: ProfilePage
  },
  {
    path: "/create",
    sidebarName: "Create Sweepstake",
    navbarName: "Create Sweepstake",
    icon: Person,
    component: CreateSweepstake
  },
  {
    path: "/sweepstakes",
    sidebarName: "Sweepstakes",
    navbarName: "Sweepstakes",
    icon: Person,
    component: ViewAllSweepstakes
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
]

export default AppRoutes
