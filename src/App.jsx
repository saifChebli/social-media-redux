import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import FriendsList from './pages/FriendsList'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

const App = () => {
  return (
     <Router>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Home />} />
               <Route path='/friends-list' element = {<FriendsList />} />
            </Route>
         </Routes>
     </Router>
  )
}

export default App