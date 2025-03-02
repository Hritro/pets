import './App.css'
import Banner from './components/Banner'
import BrowseByCat from './components/BrowseByCat'
import EverydayLowPrice from './components/EverydayLowPrice'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

import Tranding from './components/Trandind'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <main className='max-w-7xl mx-auto lg:px-0 px-3'>
        <Banner></Banner>
        <BrowseByCat></BrowseByCat>
      </main>
      <Tranding></Tranding>
      <EverydayLowPrice></EverydayLowPrice>
      <Footer></Footer>
      
    </>
  )
}

export default App
