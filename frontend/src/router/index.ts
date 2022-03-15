import Compose from "../pages/Compose";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "compose",
    component: Compose
  },
  {
    path: "profile",
    component: Profile
  }
];

export default routes;
