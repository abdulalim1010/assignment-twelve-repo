import {
  createBrowserRouter,

} from "react-router"
import MainLayout from "../../Layout/MainLayout";
import Home from "../../pages/Home";

import Skill from "../../pages/skill/Skill";
import Study from "../../pages/Study";
import Contact from "../../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component:Home
      },
      {
        path: 'skill',
        Component: Skill,
        loader: () => fetch('/skill.json'),
      }
      ,
      {
        path: 'study',
        Component: Study,
        loader:()=>fetch('/public/study.json')
      }
      ,
      {
        path: 'contact',
        Component:Contact,
      }
   ]
  },
]);