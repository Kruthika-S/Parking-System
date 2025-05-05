import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import SignupForm from './login.jsx'
import SignupPage from './signupPage.jsx'     // NEW
import ForgotPassword from './ForgotPassword.jsx'
import ContactUs from './ContactUs';
 // NEW

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<SignupForm />} />
        <Route path="/signup" element={<SignupPage />} />       // NEW
        <Route path="/forgot-password" element={<ForgotPassword />} /> // NEW
        <Route path="/findSpot" element={<App />} />  
        <Route path="/contactUs" element={<ContactUs />} /> // NEW
      </Routes>
    </BrowserRouter>
  </StrictMode>
)