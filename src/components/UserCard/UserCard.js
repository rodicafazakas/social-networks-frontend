const UserCard = ( {user}) => {

  
  return (
    <div className="card">
      <div className="card_image">
        <img src={user.photo} 
            alt={user.name} 
            width="200" 
            height="200"/>
      </div>
      <div className="card__info_container">
        <ul className="card__info">      
          <li className="card__item"> <h4> {user.name} </h4> </li>
          <li className="card__item"> <span> {user.bio} </span> </li> 
        </ul>      
      </div>  
    </div>
  )
}

export default UserCard;