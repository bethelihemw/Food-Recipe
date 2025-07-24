import FoodImages from './FoodImages'


function MainSection(){
    const images = [
        "/FoodImage/burger.jpg",
        "/FoodImage/Chicken-Wrap.jpg",
        "/FoodImage/burger2.jpg",
        "/FoodImage/burger2.jpg",
        "/FoodImage/french fries.jpg",
        "/FoodImage/fries.jpg",
        "/FoodImage/hot-dogs.jpg",
        "/FoodImage/pizza.jpg",
        "/FoodImage/Sausage.jpg",
    ]

    return(
        <div className="section main">
            <div className="column1">
                <h1 className="title"> Who We Are</h1>
                <p className="info">Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Eos, officia illum
                     voluptatem dolores, nulla amet reiciendis 
                     laboriosam accusamus est, mollitia excepturi 
                     nobis? Quasi aspernatur officia et eos 
                     necessitatibus est culpa?</p>
                     <button className="btn"> Explore Now</button>
            </div>
            <div className="column1 gallary">
                {images.map((src,index) => (
                    <FoodImages key ={index}  imgsrc={src} pt = {"100%"}/>
                ))}
            </div>
        </div>
    )
}
export default MainSection