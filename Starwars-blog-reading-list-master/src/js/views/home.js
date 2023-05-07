import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const { store, actions } = useContext(Context);
  console.log("Characters in the Home component:", store.charactersFetch);
  const navigate = useNavigate();

  return (
    <div className="text-start mt-5 container">
      <h2 className="text-danger">Characters</h2>

      <div className="carrousel">
        {store.charactersFetch && store.charactersFetch.map((character) => {
          return (
            <div className="character" key={character.uid}>
              <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top character-image" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{character.properties.name}</h5>
                <p className="card-text">Gender: {character.properties.gender}</p>
                <p className="card-text">Hair Color: {character.properties.hair_color}</p>
                <p className="card-text">Eye Color: {character.properties.eye_color}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-primary"
                    onClick={() => navigate(`/character/${character.uid}`)}>Learn more</button>
                  <button className="btn btn-outline-warning"
                    onClick={() => actions.addFavorite(character)}><i className="fab fa-gratipay"></i></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="mt-5 text-danger">Planets</h2>
      <div className="carrousel">
        {store.planetsFetch && store.planetsFetch.map((planet) => {
          return (
            <div className="planets" key={planet.uid}>
              <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{planet.properties.name}</h5>
                <p className="card-text">Population: {planet.properties.population}</p>
                <p className="card-text">Terrain: {planet.properties.terrain}</p>
              </div>
              <div className="footercard p-3">

                <button className="btn btn-outline-warning"
                  onClick={() => actions.addFavorite(planet)}><i className="fab fa-gratipay"></i></button>
              </div>
            </div>
          )
        })}
      </div>
      <h2 className="mt-5 text-danger">Vehicles</h2>
      <div className="carrousel">
        {store.vehiclesFetch && store.vehiclesFetch.map((vehicle) => {
          return (
            <div className="vehicles" key={vehicle.uid}>
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{vehicle.properties.name}</h5>
                <p className="card-text">Cost: {vehicle.properties.cost_in_credits}</p>
                <p className="card-text">Speed: {vehicle.properties.max_atmosphering_speed}</p>
              </div>
              <div className="footercard p-3">
                <button className="btn btn-outline-warning"
                  onClick={() => actions.addFavorite(vehicle)}><i className="fab fa-gratipay"></i></button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
