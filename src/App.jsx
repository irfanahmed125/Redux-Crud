import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'

const App = () => {
  return (
    <>
  <Navbar/>  
  <div className="conatiner p-5">
    <Form/>
    <ListGroup/>
  </div>
    </>
  )
}

export default App