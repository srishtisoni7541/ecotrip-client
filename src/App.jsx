

import Wrapper from './pages/Wrapper'
import { Route, Routes } from 'react-router-dom'

import AdminPanel from './admin-panel/AdminPanel'
import ToursPage from './pages/ToursPage'
import DateWiseTourPage from './pages/DateWiseTourPage'
import TourDetailPage from './pages/TourDetailPage'

const App = () => {
  return (
    <div className='w-full flex-col flex items-center justify-center'>
     <Routes>
      <Route path='/' element={<Wrapper/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
      <Route path='/tour' element={<ToursPage/>}/>
      <Route path='/tour-by-date' element={<DateWiseTourPage/>}/>
      <Route path='/tour-details' element={<TourDetailPage/>}/>
     </Routes>
    </div>
  )
}

export default App
