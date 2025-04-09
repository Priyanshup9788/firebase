
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Add from './Components/Add'
import View from './Components/View'
import Header from './Components/Header'


function App() {

  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
