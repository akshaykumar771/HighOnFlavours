import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Navbar from './components/Navbar/Navbars';
import { recipes } from './tempDetail';
class App extends Component {
  state = {
    recipes: recipes
};
  render() {
    return (
      <React.Fragment>
        <Navbar />
       <RecipeList recipes={this.state.recipes}/>
      </React.Fragment>
    );
  }
}

export default App;
