
import './App.css'
import SearchAppBar from './Organism/SearchAppBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ConstructorStandingsPage from './Pages/ConstructorStandingsPage'
import DriverStandingsPage from './Pages/DriverStandingsPage'
import ConstructorPage from './Pages/ConstructorPage'
import DriverPage from './Pages/DriverPage'
import RacePage from './Pages/RacePage'

function App() {

  return (
    <>
    <SearchAppBar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path='/race' element={<RacePage />}/>
      <Route path="/standings/constructor" element={<ConstructorStandingsPage />}/>
      <Route path="/standings/driver" element={<DriverStandingsPage />}/>
      <Route path="/constructor" element={<ConstructorPage />}/>
      <Route path="/driver" element={<DriverPage />}/>
    </Routes>
    </>
  )
}

export default App
