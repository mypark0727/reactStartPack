import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/globals.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 
      basename을 선언하면 그 하위요소에서 path를 설정할때 생략가능 
      config.js 에서 base 추가하여 사용
    */}
    {/* <BrowserRouter basename="/myReact"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
