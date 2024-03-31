import React from 'react'
import Front from '../components/RoadMaps/Front'
import JavaScript from '../components/RoadMaps/JavaScript'
import Back from '../components/RoadMaps/Back'
import FullStack from '../components/RoadMaps/FullStack'
import Security from '../components/RoadMaps/Security'
import { Route, Routes } from 'react-router-dom'

const RoadMaps = () => {
  return (
    <Routes>
      <Route path='/front' element={<Front />} />
      <Route path='/js' element={<JavaScript />} />
      <Route path='/fullstack' element={<FullStack />} />
      <Route path='/back' element={<Back />} />
      <Route path='/security' element={<Security />} />
    </Routes>
  )
}

export default RoadMaps;
