import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import "./index.css";
import SearchBar from "./components/SearchBar";
const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [loading, setLoading] = useState(true);
  const [phrase, setPhrase] = useState("");
  const [allPokemons, setAllPokemons] = useState("");

  //all pokemons
  useEffect(() => {
    setLoading(true);

    let cancel;
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0", {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setAllPokemons(res.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, []);

  //page pokemons
  useEffect(() => {
    setLoading(true);

    let cancel;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPage(res.data.next);
        setPreviousPage(res.data.previous);
        setPokemonData(res.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, [currentPage]);

  if (loading) return "Loading...";

  function goToNextPage() {
    setCurrentPage(nextPage);
    setPhrase("");
  }
  function goToPreviousPage() {
    setCurrentPage(previousPage);
    setPhrase("");
  }

  function searchFunction() {
    let pokemonsFiltered = allPokemons.filter((pokemon) =>
      pokemon.includes(phrase)
    );
  }
  return (
    <div>
      <SearchBar
        setPhrase={setPhrase}
        phrase={phrase}
        setLoading={setLoading}
        searchFunction={searchFunction}
      />
      <PokemonList
        pokemonData={
          phrase.length == 0
            ? pokemonData
            : allPokemons.filter((pokemon) => pokemon.includes(phrase))
        }
        setLoading={setLoading}
        phrase={phrase}
      />
      <Pagination
        goToNextPage={nextPage ? goToNextPage : null}
        goToPreviousPage={previousPage ? goToPreviousPage : null}
      />
    </div>
  );
};

export default App;
