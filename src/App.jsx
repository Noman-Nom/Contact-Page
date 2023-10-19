import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./app.css"
import ContactHeader from './components/Navbar/ContactHeader/ContactHeader'
import ContactForm from './components/Navbar/ContactForm/ContactForm'

const App = () => {
  return (
    <div>
        <Navbar/>
        <ContactHeader/>
        <ContactForm/>
      
    </div>
  )
}

export default App
