import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter , faInstagram} from "@fortawesome/free-brands-svg-icons"

function ChiefCard({chief}){
    return(
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="cardinfo">
                <h3 className="chief-name">{chief.name}</h3>
                <p className="chief-recipe">Recipe: {chief.recipesCount}</p>
                <p className="chief-cuisine">Cuisine: {chief.cuisine}</p>
                <p className="chief-icon">
                    <FontAwesomeIcon icon ={faFacebook} />
                    <FontAwesomeIcon icon ={faTwitter} />
                    <FontAwesomeIcon icon ={faInstagram} />
                </p>
            </div>
        </div>
    )
}

export default ChiefCard