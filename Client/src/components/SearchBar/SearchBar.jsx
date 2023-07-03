
import  style from "./SearchBar.module.css"
import{useState} from "react";
import images from "../../images/logorick.png"

 function SearchBar({onSearch}) {
   const [character, setCharacter]= useState("")

   const handleChange= (event) => {
     setCharacter(event.target.value) 
   }
   return (
      <div className= {style.containerSearch}>
         <img src= {images} alt= "logorick.png" className={style.logo} />
         
         <div className= {style.containerInput}>
          <input type='search' value ={character} onChange={handleChange} placeholder="Search..." />
         <button onClick={()=>onSearch(character)} className={style.btn}>Search</button> 
         
         </div>
      </div>
   );
}
export default SearchBar;