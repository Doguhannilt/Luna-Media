import React from 'react';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import { Container } from '@chakra-ui/react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import LogoutButton from './components/LogoutButton';


function App() {
  return (
    <Container maxW = '680px'>
      <Header />
    <Router>
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = "/auth" element = {<AuthPage/>} />
          <Route path="/:username" element={<UserPage />} />
          <Route path="/:username/post/:pid" element={<PostPage/>} /> 
        </Routes>
      </Router>

        {<LogoutButton/> }
    </Container>
  );
}


export default App;
