function FoodImages({imgsrc,pt}){
    return(
        <div className="foodimage" style={{paddingTop: pt}}>
           <img src={imgsrc} alt="" />
        </div>
    )
}

export default FoodImages