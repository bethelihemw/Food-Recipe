import Recipes from "../Pages/Recipes"
import FoodImages from "./FoodImages"



function RecipesCard({recipe}){
    return(
        <div className="recipe-card">
            <FoodImages imgsrc={recipe.image}  pt= "60%"/>
            <div className="recipe-info">
                <img className="author-img" src={recipe.autherimg} alt="" />
                <p className="recipe-title">{recipe.title} </p>
                <p className="recipe-desc"> Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Tenetur quia ex temporibus 
                    esse nostru voluptatum odio quibusdam, voluptas id est
                    itaque quasi quae eos aspernatur eum minima
                    dolor quo beatae.</p>
                <a className="view-btn" href="/"> VIEW RECIPE</a>
            </div>
        </div>
    ) 
}

export default RecipesCard