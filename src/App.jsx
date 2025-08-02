import React from 'react'
import AddPost from './components/AddPost'
import PostList from './components/PostList'
import Navbar from './components/Navbar'
import Layout from './components/Layout'

const App = () => {
  return (
     <Layout>
        <AddPost />
        <PostList />
     </Layout>
  )
}

export default App