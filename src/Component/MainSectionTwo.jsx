

function MainSectionTwo(){
    const lists =[
        "Learn new recpies ",
        "Experiment with food",
        "Write your own recpies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked "
    ]
    return(
        <div className="section maintwo">
            <div className="column1 image">
                <img src="/FoodImage/pizza.jpg" alt="" />
            </div>
            <div className="column1 typo">
                <h1 className="title">Improve Your Skill</h1>
                {lists.map((item,index)=> (
                    <p className="skillitems" key={index}>{item}</p>
                ) )}
                <button className="btn">Signup Now</button>
            </div>
            
        </div>
    )
}
export default MainSectionTwo