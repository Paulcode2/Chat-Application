import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import './style.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'

function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to='/login'/>
    }
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = 
          {<ProtectedRoute>
            <Home/>
            </ProtectedRoute>}/>
          <Route path='/login' element = {<Login/>} />
          <Route path='/register' element = {<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Register /> */}
    {/* <Login />
    <Home /> */}
    </>
  )
}

export default App
