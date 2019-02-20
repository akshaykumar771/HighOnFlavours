import React, { Component } from 'react';
export default class RecipeDetail extends Component {
  render() {
    const {
      image
     }= this.props;
    //   console.log(image_url)
    return (
      <div>
        <img src ={image}></img>
        {console.log(image)}
      </div>
        
    )
  }
}
{/* <div>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <button type="button" className="btn btn-warning mb-5 text-captilaize">back to recipes</button>
                <img src = {image} className="d-block w-100" alt="recipe" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3">
                 <h6 className="text-uppercase">{title}</h6> 
              </div>
            </div>
          </div>
        </div> */}