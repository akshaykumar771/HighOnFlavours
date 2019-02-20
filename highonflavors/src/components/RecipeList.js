import React, { Component } from 'react';
import Recipes from './Recipes';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
   
  render() {
    // console.log(this.props.recipes);
    const recipes = this.props.recipes;
    return (
    <React.Fragment>
      <RecipeSearch />
        <div className="container my-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                    <h1 className="content-text">recipe list</h1>
                </div>
             </div>
             <div className="row">
                 {recipes.map(recipe =>{
                     return <Recipes key={recipe.recipe_id}
                     recipe={recipe} />

                 })}
                
             </div>
        </div>
    </React.Fragment>
    )
  }
}
