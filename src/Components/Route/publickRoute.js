import About from "../About/About";
import AddService from "../Dashboard/AddService";

export const PublickRoute = [
    {path:'/', name:Home, Component:Home },
    {path:'/addservice', name:AddService, Component: AddService},
    {path:'/about', name:About, Component:About },
    {path:'/gps', name:Gps, Component:Gps }
]