import React, { useState, useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

export default function RecipeList(props) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  const { recipes } = props;
  const [searchTxt, setSearchTxt] = useState();

  function handleSearchInput(userInput) {
    setSearchTxt(userInput);
  }

  const filterRecipes =
    searchTxt != null
      ? recipes.filter((r) => r.name.toLowerCase().includes(searchTxt))
      : recipes;

  return (
    <div className="recipe-list">
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
      </div>
      <div>
        {filterRecipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
