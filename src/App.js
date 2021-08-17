import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Movie from './components/Movie';

import Header from './components/Header';

import Home from './components/Home';

import NotFound from './components/NotFound';

import { GlobalStyle } from './GlobalStyle';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>} />
        <Route path='/*' element={<NotFound/>} />
     </Routes>
     <GlobalStyle />
      </Router>
  );


export default App;
