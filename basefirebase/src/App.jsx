
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Add from './Components/Add'
import View from './Components/View'
import Header from './Components/Header'
import Update from './Components/Update'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'


function App() {

  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
