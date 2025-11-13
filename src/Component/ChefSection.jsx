
import ChiefCard from "./ChiefCard"

function ChefSection(){
    const chiefs = [
        {   name:"juan carlos",
            img: "/FoodImage/burger.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {   name:"Gordan Ramsey",
            img: "/FoodImage/burger2.jpg",
            recipesCount: "20",
            cuisine: "Korean",
        },
        {   name:"styls stlinsky",
            img: "/FoodImage/pizza.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {   name:"juan carlos",
            img: "/FoodImage/Sausage.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {   name:"juan carlos",
            img: "/FoodImage/fries.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {   name:"juan carlos",
            img: "/FoodImage/french fries.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        }

    ]
    return(
        <div className="section chef">
            
            <h1 className="title"> Our Top Chief</h1>
            <div className="topchiefs">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                {chiefs.map(chief => <ChiefCard key ={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}
export default ChefSection