import { Dashboard, Profile } from '../components/layout'
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
    component: Dashboard
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
]

export default AppRoutes
