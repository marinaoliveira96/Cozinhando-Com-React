import React, { useState } from 'react';
import Recipe from './Recipe';

export default function Search(props) {
  const { recipeList } = props;
  const [searchTxt, setSearchTxt] = useState();

  function handleSearchInput(userInput) {
    setSearchTxt(userInput);
  }

  const filterRecipes =
    searchTxt != null
      ? recipeList.filter((r) => r.name.toLowerCase().includes(searchTxt))
      : recipeList;

  return (
    <div className="recipe__search">
      <div className="search">
        <label htmlFor="search" className="title" />
        Search
        <input
          className="input__search"
          type="text"
          name="search"
          onChange={(e) => handleSearchInput(e.target.value)}
        />
      </div>

      <div>
        {filterRecipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
}
