import React, { useState, useEffect } from 'react'
import RecipeItem from './RecipeItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

function Recipe(props) {

    const [searchWord, setSearchWord] = useState("");
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('general');
    const [loading, setLoading] = useState(false);
    const [ApiUrl, setApiUrl] = useState(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${props.APP_ID}&app_key=${props.API_KEY}`);


    const handleOnChange = async (event) => {
        setSearchWord(event.target.value);
    };

    const getRecipes = async () => {
        if (query === "") setQuery("general");
        setLoading(true);
        props.setProgress(10);
        let response = await fetch(ApiUrl);
        props.setProgress(40);
        let recipes = await response.json();
        props.setProgress(70);
        setLoading(false);
        setData(recipes.hits);
        setApiUrl(recipes._links.next.href);
        props.setProgress(100);

    }

    useEffect(() => {
        document.title = `${query} - Mom's Kitchen`;
        getRecipes();
    }, [query])

    const getSearch = (e) => {
        setApiUrl(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchWord}&app_id=${props.APP_ID}&app_key=${props.API_KEY}`);
        e.preventDefault();
        setData(new Array(0));
        setQuery(searchWord);
        setSearchWord('');
    }
    const fetchMoreData = async () => {
        setLoading(true);
        let response = await fetch(ApiUrl);
        let recipes = await response.json();
        setLoading(false);
        setData(data.concat(recipes.hits));
        setApiUrl(recipes._links.next.href);
    };

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
            {loading && !data && <Spinner className="my-4" />}
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={ApiUrl}
                // inverse={true}
                loader={<Spinner />}
                endMessage={"We have shown you all the results we have"}
            >
                <div className="row" style={{ margin: "0px" }}>
                    {
                        data && data.map((element, index) => {
                            return <div className="col col-sm-10 col-md-4 my-2" key={element.recipe.ingredientLines}>
                                < RecipeItem imageUrl={element.recipe.image} url={element.recipe.url} title={element.recipe.label} source={element.recipe.source} calories={element.recipe.calories} mealType={element.recipe.mealType} dishType={element.recipe.dishType} weight={element.recipe.totalWeight} ingredients={element.recipe.ingredientLines} index={index} />
                            </div>
                        })
                    }

                </div>
            </InfiniteScroll>
        </div >
    )
}

export default Recipe;