import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import EducationAndExperience from './components/education-and-exp';
import Projects from './components/projects';
import PageNotFound from './components/page-not-found';
import MainPage from './components/Main-Page';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<About />} />
        {/* <Route path="education-and-experience" element={<EducationAndExperience />} /> */}
        <Route path='projects' element={<Projects />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
