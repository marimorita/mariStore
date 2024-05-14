import React, {useState,useEffect} from 'react'
import { Cards } from "./components/Cards/Cards"
import { Footer } from "./components/Layouts/Footer/Footer"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"

function App() {


  const [dataProduct, setDataProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setDataProduct(data)
      })
      .catch(error => {
        console.log('Error fetch data', error)
      })
  }, []);
  return (
    <div className=" w-screen h-screen flex flex-col ">
      <Header />
      <Main>
        {dataProduct.map(data => (
          <Cards 
          key={data.id}
          img={data.image}
          title={data.title}
          description={data.description}
           />
        ))}
      </Main>
      <Footer />
    </div>
  )
}

export default App
