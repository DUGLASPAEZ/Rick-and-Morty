import { connect, useDispatch} from "react-redux";
import Card from "../Card/Card.jsx";
import { filterCards, orderCards } from "../../redux/actions.js";
import { useState } from "react";

const Favorites = ({myFavorites, onClose}) => {
const [aux, setAux] = useState(false)
const dispatch= useDispatch()

const handleOrder  = (e)=> {
    dispatch(orderCards(e.target.value))
    setAux(!aux)
}
const handleFilter = (e)=> {
    dispatch(filterCards(e.target.value))
}

    return ( 
    <>
    <h1>My Favorites</h1>
    <select onChange={handleOrder}>
        <option value= "A">Ascendente</option>
        <option value= "D">Descendente</option>
    </select>
    <select onChange={handleFilter}>
    <option value= "Male">Male</option>
    <option value= "Female">Female</option>
    <option value= "Genderless">Genderless</option>
    <option value= "unknow">Unknow</option>
    </select>
    {
        myFavorites?.map((element, index) => {
            return (
                <Card key = {index}

               id={element.id}
               name={element.name}
               status={element.status}
               species={element.species}
               gender={element.gender}
               origin={element.origin.name}
               image={element.image}
               onClose={ onClose}
                />
            )
        })
    }
    </>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);