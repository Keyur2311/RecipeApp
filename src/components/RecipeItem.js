import React from 'react'

function RecipeItem(props) {
    let { imageUrl, url, title, source, calories, mealType, dishType, weight, ingredients, index } = props;
    let x = "#recipeModal" + index.toString();
    let ind = "recipeModal" + index.toString();

    return (
        <div className='my-3' >
            <div className="card" id="mainBox">
                <div style={{
                    dispklay: 'flex',
                    justifyContent: 'flex-end',
                    right: '0',
                    position: 'absolute',
                }}>
                    <span className="badge rounded-pill bg-danger"> {source ? source : "Unknown"}
                    </span>
                </div>
                <img src={!imageUrl ? "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/09/asteroid-1662981783.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className='card-text'> <small className='text-muted'> Calories : {calories.toFixed(2)} {" Joules"}</small></p>
                    <p className='card-text'> <small className='text-muted'> Meal Type : {mealType}</small></p>
                    <p className='card-text'> <small className='text-muted'> Dish Type : {dishType} </small></p>
                    <p className='card-text'> <small className='text-muted'> Weight : {weight.toFixed(2)} {" grams"}</small></p>
                    <button type="button" className="btn btn-outline-success my-1" data-bs-toggle="modal" data-bs-target={x}>
                        Recipe
                    </button>
                    <a className="btn btn-outline-success mx-1 my-1" rel="noopener noreferrer" href={url} target="_blank">
                        Read More
                    </a>


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={ind} tabIndex="-1" aria-labelledby="recipeModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="recipeModalLabel">Recipe for {title}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p style={{ fontSize: "20px" }}><b>Steps and Ingredients</b></p>
                                    {
                                        <div className="d-flex row flex-column" key={imageUrl}>
                                            {
                                                ingredients.map((val, index) => {
                                                    return <div key={index}><b>{index + 1}</b>{":-  "} {val}</div>
                                                })
                                            }
                                        </div >}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RecipeItem;
