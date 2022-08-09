import About from "../About/About";
import AddService from "../Dashboard/AddService";
import Dashboard from "../Dashboard/Dashboard";
import UpdateService from "../Dashboard/UpdateService";
import User from "../Dashboard/User";
import CasualLeave from "../Gps/CasualLeave";
import Gps from "../Gps/Gps";
import Home from "../Home/Home";

export const publickRoute = [
    {path:'/', name:Home, Component:Home },
    {path:'/addservice', name:AddService, Component: AddService},
    {path:'/about', name:About, Component:About },
    {path:'/dashboard', name:Dashboard, Component:Dashboard },
    {path:'/addservice', name:AddService, Component:AddService },
    {path:'/updateservice/:id', name:UpdateService, Component:UpdateService },
    {path:'/user', name:User, Component:User },
    {path:'/gps', name:Gps, Component:Gps },
    {path:'/casualleave', name:CasualLeave, Component:CasualLeave },
    {path:'/gps', name:Gps, Component:Gps }
]

// export const publickRoute = [
//     {path: '/', name: Home, Component: Home},
//     {path:'/', name:Home, Component:Home},
//     {path: '/', name: Home, Component: Home},
//     {path: '/', name: Home, Component: Home}
// ]