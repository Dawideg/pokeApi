import React, { useState } from "react";
import ListElement from "./ListElement";

const PokemonList = ({ pokemonData, setLoading }) => {
  return (
    <div className="pokemon-list">
      {pokemonData.slice(0, 20).map((el) => {
        return (
          <ListElement
            key={crypto.randomUUID()}
            setLoading={setLoading}
            el={el}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
