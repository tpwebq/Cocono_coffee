import Basket from "./views/basket";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Index from "./views/index";
import Privacy from "./views/privacy";
import Products from "./views/products";

const ROUTES = [
    {navbarItem:true, name:"Home", path: "/",component:<Index/>},
    {navbarItem:true, name:"Products", path: "/products",component:<Products/>},
    {navbarItem:true, name:"Contact", path: "/contact",component:<Contact/>},
    {navbarItem:true, name:"Basket", path: "/basket",component:<Basket/>},
    {navbarItem:false, name:"Comingsoon", path: "/comingsoon",component:<Comingsoon/>},
    {navbarItem:false, name:"Privacy", path: "/privacy",component:<Privacy/>},
    {navbarItem:false, path:"*",component:<Error/>}
];

export {
    ROUTES
};