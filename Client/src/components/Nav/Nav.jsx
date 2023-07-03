import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import  {Link} from "react-router-dom";
import style from "./Nav.module.css"

const Nav =({onSearch})=>{
    return (
        
    <div className= {style.Navmodule}>
        <Link to= "/home"><button>Home</button></Link>

        <Link to = "/abaut"><button>Abaut</button></Link>
        
         <Link to= "/favorites"><button className= {style.btn}> Favorites</button></Link>
    
         <SearchBar onSearch={onSearch}/>
    </div>
    )
}
export default Nav;

        
           
         
     