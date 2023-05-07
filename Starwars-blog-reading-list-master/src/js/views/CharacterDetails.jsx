import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const CharacterDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [currentCharacter, setCurrentCharacter] = useState({});
  const { id } = params;

  const getCharacterDetails = async (id) => {
    const Character = store.charactersFetch.find((character) => character.uid === id);
    setCurrentCharacter(Character);
  };

  useEffect(() => {
    if (store.charactersFetch.length === 0) return;
    getCharacterDetails(id);
  }, [store.CharactersFetch]);

  return (
    <>
      {currentCharacter ? (
        <div className="card mb-3 m-3 border border-0" style={{ MaxWidth: "100px" }}>
          <div className="row g-0">
            <div className="col-md-4 p-4">
              <img src={`https://starwars-visualguide.com/assets/img/characters/${currentCharacter?.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-1">
                  {currentCharacter?.properties?.name}</h5>
                <p className="card-text text-dark">Blah blah blah…</p> {/* Fix is here */}
              </div>
            </div>
          </div>
          <div className="dangerLine h4 pb-2 mb-4 text-danger border-bottom border-white text d-flex gap-5 mt-4">
          </div>
          <div className="text d-flex gap-5 fs-4 text-danger border-top border-danger m-3 justify-content-center">
            <p>Name: {currentCharacter?.properties?.name}</p>
            <p>Birth Year: {currentCharacter?.properties?.birth_year}</p>
            <p>Gender: {currentCharacter?.properties?.gender}</p>
            <p>Height: {currentCharacter?.properties?.height}</p>
            <p>Skin Color: {currentCharacter?.properties?.skin_color}</p>
            <p>Eye Color: {currentCharacter?.properties?.eye_color}</p>
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default CharacterDetails;