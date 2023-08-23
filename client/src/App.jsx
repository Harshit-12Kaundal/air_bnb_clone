import {Routes,Route} from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import ProfilePage from './pages/ProfilePage'
import PlacesPage from './pages/PlacesPage'
import PlacesFromPage from './pages/PlacesFormPage'

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/account" element={<ProfilePage/>}/>
            <Route path="/account/places" element={<PlacesPage/>}/>
            <Route path="/account/places/new" element={<PlacesFromPage/>}/>
            <Route path="/account/places/:id" element={<PlacesFromPage/>}/>
          </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
