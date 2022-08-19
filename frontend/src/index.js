import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Audio from './pages/Audio'
import Video from './pages/Video'
import Document from './pages/Document'
import Index from './pages/Index'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Index />}/>
          <Route path="category/audio"  element={<Audio />}/>
          <Route path="category/video"  element={<Video />}/>
          <Route path="category/document" element={<Document />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
