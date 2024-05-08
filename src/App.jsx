import { Footer } from "./components/Layouts/Footer/Footer"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"

function App() {
  
  return (
    <div className=" w-screen h-screen flex flex-col ">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
