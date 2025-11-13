import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../Component/Footer"
import NavBar from "../Component/NavBar"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import RecipesCard from "../Component/RecipesCard"


function Recipes(){
    const recipes =[
        {
            title:"Chicken Pan Pizza",
            image:"/FoodImage/Sausage.jpg",
            autherimg: "/FoodImage/burger2.jpg",
        },
        {
            title:"Chicken Wrap Special",
            image:"/FoodImage/Chicken-Wrap.jpg",
            autherimg: "/FoodImage/burger2.jpg",
        },
        {
            title:"Special Italian Pizza",
            image:"/FoodImage/pizza.jpg",
            autherimg: "/FoodImage/burger2.jpg",
        },
        {
            title:"Chicken Burger",
            image:"/FoodImage/burger.jpg",
            autherimg: "/FoodImage/burger2.jpg",
        },
        {
            title:"Special Beef Burger",
            image:"/FoodImage/burger.jpg",
            autherimg: "/FoodImage/burger2.jpg",
        },
        {
            title:"High HotDog",
            image:"/FoodImage/burger.jpg",
            autherimg: "/FoodImage/hot-dogs.jpg",
        },
        {
            title:"Chicken Rolls",
            image:"/FoodImage/Chicken-Wrap.jpg",
            autherimg: "/FoodImage/burger2.jpg",
        },
        {
            title:"Special fries",
            image:"/FoodImage/fries.jpg",
            autherimg: "/FoodImage/burger2.jpg",
        },
        {
            title:" Special Burger",
            image:"/FoodImage/burger2.jpg",
            autherimg: "/FoodImage/burger2.jpg",
        }
    ].sort(() => Math.random() - 0.5)
    const searches = ["Pizza" , "Burger" , "Coockies", "IceCream", "Pudding", "Lasagna", "Soup"]
    return(
        <div>
            
            <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    {searches.map((search, index) => (<div key ={index } style={{animationDelay: index * .1 + "s" }} className="search-item"> 
                        {search}
                    </div>))}
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search..."/>
                    <button className="btn"> <FontAwesomeIcon icon ={faSearch} /></button>

                </div>
            </div>
            <div className="recipes-container">
                {/* <RecipesCard />
                <RecipesCard />
                <RecipesCard />
                <RecipesCard />
                <RecipesCard />
                <RecipesCard />
                <RecipesCard />
                <RecipesCard />
                <RecipesCard /> */}
                {recipes.map((recipe,index) => (
                    <RecipesCard key={index} recipe={recipe} />
                ))}
            </div>
            
        </div>
    )
}

export default Recipes