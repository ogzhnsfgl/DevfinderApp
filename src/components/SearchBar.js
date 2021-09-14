import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import { useUser } from "../context/userDataContext";

const SearchBar = () => {
  const { setUserData, userData } = useUser();
  const { setTheme, theme } = useTheme();

  const [input, setInput] = useState("");
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleOnClick = () => {
    fetch(`https://api.github.com/users/${input}`)
      .then((response) => response.json())
      .then((user) => {
        setUserData(user);
        setInput("");
      });
  };

  const themeSwitcher = () => {
    setTheme(!theme);
  };

  return (
    <div className="searchBar-container">
      <div className={`nav ${theme ? "dark" : "light"}`}>
        <p className="header">Devfinder.</p>
        <button
          className={`${theme ? "dark" : "light"}`}
          onClick={themeSwitcher}
        >
          {`${!theme ? " dark" : " light"}`}
          <i className={`fas fa-sun fa-lg ${theme ? "dark" : "light"}`}></i>
        </button>
      </div>
      <div className={`searchBar ${theme ? "dark" : "light"}`}>
        <i className={`fas fa-search fa-2x ${theme ? "dark" : "light"}`}></i>
        <input
          className={`${theme ? "dark" : "light"}`}
          type="text"
          placeholder="Search GitHub username..."
          value={input}
          onChange={(e) => onChangeHandler(e)}
        />
        <button
          className={`${theme ? "dark" : "light"}`}
          onClick={(e) => handleOnClick(e)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
