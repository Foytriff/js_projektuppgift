import React from 'react';
import { Navbar, CTA, Button, Form } from './components';
import { Hero, Gallery, Contact, About } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CTA />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;
