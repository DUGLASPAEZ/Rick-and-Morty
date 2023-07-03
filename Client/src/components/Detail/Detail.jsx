import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail= ()=> {
    const {id}= useParams();
    const[character, setCharacter] =useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('There are no characters with that ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div>
       <h1>{character.name}</h1>
       
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origen?.name}</h2>
         <img src={character.image} alt={character.name} /> 
        </div>
    )
}
export default Detail;