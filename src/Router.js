import './Router.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header.js';
import Nav from './Nav.js';
import MainPage from './MainPage.js';
import BoardPage from './BoardPage.js';
import RegisterPage from './RegisterPage.js';
import MyPage from './MyPage.js';
import SettingPage from './SettingPage.js';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/board/:id" element={<BoardPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/setting" element={<SettingPage />}></Route>
        </Routes>
      </main>
      <Nav />
    </BrowserRouter>
  )
}

export default Router;