import React, { Component } from 'react'
import RecipeDetail from './RecipeDetail';
import { recipes } from '../tempDetail';

export default class Recipes extends Component {
  
  constructor(){
    super();
    this.state = {
      recipes: recipes,
      showComponents: false
  };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      showComponents: true
    })
  }

  render() {
     
    const{
        image_url,
        publisher,
        title,
        recipe_id
      } = this.props.recipe;
    
    return (
      <React.Fragment>
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
              <img src={image_url}
              className="img-card-top"
              style={{height:"14rem"}} alt="recipe"/>
              <div className="card-body text-capitalize">
                <h6>{title}</h6>
                <h6 className="text-warning content-text">
                  Provided By {publisher}
                </h6>
                <button onClick={this.handleClick} className="btn btn-primary text-capitalize">details</button>
                {this.state.showComponents ? <RecipeDetail image={this.state.image_url} /> :null}
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
