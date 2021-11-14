import React from "react";
import UserCard from "../components/UserCard/UserCard";
import useAllUsers from "../hooks/useAllUsers";
import {useEffect} from "react";

import "./Home.css";

const Home = () => {
  const {allUsers, loadAllUsers} = useAllUsers();

  useEffect( ()=> {
    loadAllUsers()
  }, [loadAllUsers]);
   
  return (
    <div className = "homepage">

      <ul className = "cards-list">
        { allUsers && allUsers.length ? 
          allUsers.map( (user) => <UserCard key={user.id} user={user}/>) 
            : "There is no data available from Heroku"
        }
      </ul>  
    </div>
  )
}

export default Home;