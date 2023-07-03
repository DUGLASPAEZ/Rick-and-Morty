import style from './App.module.css';
import Abaut from './components/Abaut/Abaut.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Nav from "./components/Nav/Nav.jsx";
import Form from './components/Form/Form';
import   { useEffect, useState } from 'react';
import axios from "axios" ;
import {Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from './components/Favorite/Favorites.jsx';

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location =useLocation();
   const navigate = useNavigate();
   const[characters, setCharacters] = useState([]);
   const[  setAccess]= useState(false);
   
   const login = async (userData)=> {
     try {
      const { email, password } = userData;
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
       
       setAccess(access);
       access && navigate('/home');
        
     } catch (error) {
      console.log(error.message);
     }
   }

    useEffect(()=>{
      //!access && navigate("/")
    }, []);
    
     const onSearch = async (id)=> {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
         };
         
      } catch (error) {
         alert('¡There are no characters with this ID!');
         
      }
   };

     function onClose(id) {
      setCharacters((oldChars)=>{
      return oldChars.filter((ch)=>ch.id !== id)
      });
    }
   

   return (
      <div className={style.container}>
         {location.pathname === "/"? null :  <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element = {<Cards onClose={onClose} characters={characters} />}/>
            <Route path='/abaut' element= {<Abaut/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
            <Route path = "/favorites" element= {<Favorites/>}/>
         </Routes>
      
      </div>
   );
}

export default App;
