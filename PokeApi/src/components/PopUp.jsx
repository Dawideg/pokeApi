import React from "react";
import { nanoid } from "nanoid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PopUp = ({ isClicked, setIsClicked, el, pokemonData }) => {
  if (isClicked) {
    return (
      <div className="pop-up-div-background">
        <div className="pop-up-div">
          <p className="pop-up-pokemon-name pop-up-text-style">{el}</p>

          <p className="pop-up-pokemon-id pop-up-text-style">{`Id: ${pokemonData.id}`}</p>

          <img
            src={pokemonData.sprites.front_default}
            className="pokemon-image-pop"
          />

          <p className="pop-up-text-style">Abilities:</p>
          <ul>
            {pokemonData.abilities.map((el) => {
              return <li className="pop-up-text-style">{el.ability.name}</li>;
            })}
          </ul>
          <p className="pop-up-text-style">Types:</p>
          <div className="typebox-div">
            {pokemonData.types.map((el) => {
              const typeName = el.type.name;
              return (
                <p
                  className={`type-box ${typeName} pop-up-typebox`}
                  key={nanoid()}
                >
                  {typeName}
                </p>
              );
            })}
          </div>

          <button
            className="pop-up-button-cancel"
            onClick={() => setIsClicked(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
};

export default PopUp;
