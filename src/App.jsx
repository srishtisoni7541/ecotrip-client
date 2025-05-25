

import Wrapper from './pages/Wrapper'
import { Route, Routes } from 'react-router-dom'

import AdminPanel from './admin-panel/AdminPanel'

const App = () => {
  return (
    <div className='w-full flex-col flex items-center justify-center'>
     <Routes>
      <Route path='/' element={<Wrapper/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
     </Routes>
    </div>
  )
}

export default App
