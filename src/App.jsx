// npm modules
import { Route, Routes } from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'


//pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import MonsterList from './pages/MonsterList/MonsterList'
import MonsterDetails from './pages/MonsterDetails/MonsterDetails'
import SpellSearch from './pages/SpellSearch/SpellSearch'
import SpellDetails from './pages/SpellDetails/SpellDetails'

import './App.css'
 
function App() {
  return (
    <>
      <NavBar />
      <div className="app-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/monsters' element={<MonsterList />}/>
          <Route path='/monsters/:monsterId' element={<MonsterDetails />} />
          <Route path='/spells' element={<SpellSearch/>}/>
          <Route path='/spells/:spellId' element={<SpellDetails />}/>

        </Routes>
      </div>
      {/* <Shop /> */}
    </>
  )
}
  
export default App
