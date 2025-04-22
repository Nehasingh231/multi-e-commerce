import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { AuthProvider } from './context/Authcontext';

const App = () => {
  return (
    <div className='app'>
    <AuthProvider>
    <Header/>
    </AuthProvider>
      <Hero />
    </div>
  )
}

export default App;