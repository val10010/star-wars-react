import React from 'react';
import {NavLink} from 'react-router-dom';

const HomePage = () => (
  <div className="home-page">
      <div className="category">
        <NavLink to="people" className="link" > 
          <div className="card">
            <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="characters" className="card-img" />
            <span className="card-title" >Characters</span>
          </div> 
        </NavLink>
     </div>
     <div className="category">
        <NavLink to="films"  className="link"> 
          <div className="card">
          <img src="https://starwars-visualguide.com/assets/img/categories/films.jpg" alt="films" className="card-img" />
            <span className="card-title">Films</span> 
          </div>
        </NavLink>
     </div>
     <div className="category">
        <NavLink to="species" className="link" >
          <div className="card"> 
            <img src="https://starwars-visualguide.com/assets/img/categories/species.jpg" alt="Species" className="card-img" />
            <span className="card-title">Species</span> 
          </div>
        </NavLink>
     </div>
     <div className="category">
        <NavLink to="starships" className="link" >
          <div className="card">
            <img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" alt="Starships" className="card-img" />
            <span className="card-title">Starships</span> 
          </div>
        </NavLink>
     </div>
     <div className="category">
        <NavLink to="vehicles" className="link" > 
          <div className="card">
            <img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" alt="Vehicles" className="card-img" />
            <span className="card-title">Vehicles</span>
          </div>
        </NavLink>
     </div>
     <div className="category">
        <NavLink to="planets" className="link" > 
          <div className="card">
          <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" alt="Planets" className="card-img" />
          <span className="card-title">Planets</span> 
          </div>
       </NavLink>
    </div>
  </div>
)

export default HomePage;