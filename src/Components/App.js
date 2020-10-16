import { Header } from './Header.js';
import React from 'react';
import { Footer } from './Footer.js';

export const App = () => {
  return (
    <>
    <header className="heading">
    <Header heading="This is a survey" />
  </header>
  <Footer footer="This is a footer" />
  </>
  );
  };


