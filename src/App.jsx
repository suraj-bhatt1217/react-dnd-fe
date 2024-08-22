// npm modules
import { Route, Routes } from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'

//pages
import Shop from './pages/Shop/Shop'
import MonsterList from './pages/MonsterList/MonsterList'
import './App.css'
 
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/monsters' element={<MonsterList />}/>
        <Route path='/spells'/>
      </Routes>
      {/* <Shop /> */}
    </>
  )
}
  
export default App
