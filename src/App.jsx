import NavBar from "./Component/NavBar"
import MainSection from "./Component/MainSection"
import MainSectionTwo from "./Component/MainSectionTwo"
import CodeSection from "./Component/CodeSection"
import ChefSection from "./Component/ChefSection"




function App() {
  return(<div className="App">
      <NavBar />
      <div className="container main">
        <MainSection />
        <MainSectionTwo />
        <CodeSection />
        <ChefSection />
      </div>
  </div>)
}

export default App
