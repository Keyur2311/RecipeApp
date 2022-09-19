import React, { useState, useEffect } from 'react'
import RecipeItem from './RecipeItem';
import Spinner from './Spinner';

function Recipe(props) {

    const [searchWord, setSearchWord] = useState("");
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('general');
    const [loading, setLoading] = useState(false);

    const handleOnChange = async (event) => {
        setSearchWord(event.target.value);
    };

    const getRecipes = async () => {
        if (query === "") setQuery("general");
        const ApiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${props.APP_ID}&app_key=${props.API_KEY}`;
        setLoading(true);
        let response = await fetch(ApiUrl);
        let recipes = await response.json();
        setLoading(false);
        setData(recipes.hits);
    }

    useEffect(() => {
        document.title = `${query} - Mom's Kitchen`;
        getRecipes();
    }, [query])

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(searchWord);
        setSearchWord('');
    }


    return (
        <div key={data}>
            <form onSubmit={getSearch} className="d-flex justify-content-center flex-row align-items-center my-3" role="search">
                <input
                    className="form-control"
                    placeholder={"Search any food item"}
                    value={searchWord}
                    onChange={handleOnChange}
                    id="myBox"
                    style={{ width: "auto", }}
                ></input>
                <button className="btn btn-outline-success mx-2" type="submit">Search</button>
            </form>
            {loading && <Spinner className="my-4" />}

            <div className="row" style={{ margin: "0px" }}>
                {
                    !loading && data && data.map((element, index) => {
                        return <div className="col col-md-4 my-2" key={element.recipe.ingredientLines}>
                            < RecipeItem imageUrl={element.recipe.image} url={element.recipe.url} title={element.recipe.label} source={element.recipe.source} calories={element.recipe.calories} mealType={element.recipe.mealType} dishType={element.recipe.dishType} weight={element.recipe.totalWeight} ingredients={element.recipe.ingredientLines} index={index} />
                        </div>
                    })
                }

            </div>
        </div >
    )
}

export default Recipe;