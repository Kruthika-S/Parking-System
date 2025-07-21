import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import SignupForm from './login.jsx'
import SignupPage from './signupPage.jsx'
import ForgotPassword from './ForgotPassword.jsx'
import ContactUs from './ContactUs';
import { FindSpot } from './findSpot.jsx';  // Named import


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<SignupForm />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/findSpot" element={<FindSpot />} />  {/* Use FindSpot component here */}
        <Route path="/contactUs" element={<ContactUs />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
)