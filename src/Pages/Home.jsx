import MainSection from "../Component/MainSection"
import MainSectionTwo from "../Component/MainSectionTwo"
import CodeSection from "../Component/CodeSection"
import ChefSection from "../Component/ChefSection"


function Home(){
    return(
        <div>
            <MainSection />
            <MainSectionTwo />
            <CodeSection />
            <ChefSection />
        </div>
        
    )
}

export default Home