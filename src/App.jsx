import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivacyPolicy } from './components/Services';
import { TermsOfService } from './components/Services';
import { CookiePolicy } from './components/Services';
import V5Land from './components/v5/V5Land';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<V5Land />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookie" element={<CookiePolicy />} />
      </Routes>
    </Router>
  )
}

export default App
