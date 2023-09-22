import React from "react";
import { nanoid } from "nanoid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PopUp = ({ isClicked, setIsClicked, el, pokemonData }) => {
  if (isClicked) {
    return (
      <div className="pop-up-div-background">
        <div className="pop-up-div">
          <p>{el}</p>

          <p>{`Id: ${pokemonData.id}`}</p>

          <img
            src={pokemonData.sprites.front_default}
            className="pokemon-image-pop"
          />

          <p>Abilities:</p>
          <ul>
            {pokemonData.abilities.map((el) => {
              return <li>{el.ability.name}</li>;
            })}
          </ul>
          <p>Types:</p>
          {pokemonData.types.map((el) => {
            const typeName = el.type.name;
            return (
              <p className={`type-box ${typeName}`} key={nanoid()}>
                {typeName}
              </p>
            );
          })}

          <button onClick={() => setIsClicked(false)}>Cancel</button>
        </div>
      </div>
    );
  }
};

export default PopUp;
