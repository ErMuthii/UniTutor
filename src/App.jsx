
import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import Navigation from './components/Navigation'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import Courses from './components/Courses'
import Contact from './components/Contact'
import StudentDashboard from './components/StudentDashboard'

function App() {
  

  return (
    <>
    <NextUIProvider>
      <div className='flex flex-col justify-center min-h-screen'>
        <Navigation/>
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dashboard' element={<StudentDashboard/>}/>
          </Routes>
        </main> 
      </div>
    </NextUIProvider> 
   
    </>
  )
}

export default App
