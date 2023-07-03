import  style from "./Card.module.css";
import { Link } from "react-router-dom";
import images from "../../images/logodelacard.jpg"
import { connect} from "react-redux";
import  {addFav, removeFav} from "../../redux/actions"
import { useState, useEffect } from "react";

 function Card(props) {
   const { id, name, status, species, gender, origen,image, onClose, addFav, removeFav, myFavorites} = props
   const [isFav, setIsFav]= useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite =() => {
      //isFav? removeFav (id): addFav(props):
      //setFav(!isFav)
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(props)
      }
   }
   
   return (
      <div className= {style.container}>
         <div className={style.containerCard}>
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
        ) : (
        <button onClick={handleFavorite}>🤍</button>
        )
      }
            <div className={style.front}>
               <img src={image}  alt= {images }className={style.imagen}/>
            </div>

         <div className={style.back}>
          <button  className={style.btn} onClick={()=>onClose(id)}>X</button>

          <Link to={`detail/${id}`}> 
           <h2>{name}</h2>
          </Link>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origen}</h2>
         
            </div>
         </div>
      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
addFav: (character)=> dispatch(addFav(character)), 
removeFav: (id)=> dispatch(removeFav(id))
   }
}

export default connect( mapStateToProps, mapDispatchToProps)(Card)