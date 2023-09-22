import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import PopUp from "./PopUp";

const ListElement = ({ el }) => {
  const [pokemonData, setPokemonData] = useState("");
  const [dataUrl, setDataUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/${el}`
  );
  const [desc, setDesc] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let cancel;
    axios
      .get(dataUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemonData(res.data);
        console.log(res.data);

        setDesc(() => {
          return (
            <>
              <img
                className="pokemon-image"
                src={res.data.sprites.front_default}
                alt="No image!"
              />
              <p className="pokemon-txt">{el}</p>

              <div>
                {res.data.types.map((el) => {
                  const typeName = el.type.name;

                  return (
                    <p className={`type-box ${typeName}`} key={nanoid()}>
                      {typeName}
                    </p>
                  );
                })}
              </div>
            </>
          );
        });
      });

    // return () => cancel("a");
  }, []);
  return (
    <>
      <div className="list-element" onClick={() => setIsClicked(true)}>
        {desc}
      </div>
      <PopUp
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        el={el}
        pokemonData={pokemonData}
      />
    </>
  );
};

export default ListElement;
