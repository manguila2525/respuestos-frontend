import Navbar from './components/Navbar'
import Main from './components/Main'
import Spare from './components/Spare'
import SignUp from './components/SignUp'
import NotFound from './components/404'
import CreateSpare from './components/CreateSpare'
import './style.css'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/spare/:id' element={<Spare />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/createSpare' element={<CreateSpare />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
