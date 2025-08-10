import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import BlogWritingManagement from './pages/BlogWritingManagement';
import MicroappDevelopment from './pages/MicroappDevelopment';
import TechnicalWriting from './pages/TechnicalWriting';
import NoCodeWebsites from './pages/NoCodeWebsites';
import BusinessAutomation from './pages/BusinessAutomation';
import Resources from './pages/Resources';
import SeattleAITechDirectory from './pages/SeattleAITechDirectory';
import AIGlossary from './pages/AIGlossary';
import DigitalCareerMarketing from './pages/DigitalCareerMarketing';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/blog-writing-management" element={<BlogWritingManagement />} />
          <Route path="/solutions/microapp-development" element={<MicroappDevelopment />} />
          <Route path="/solutions/technical-writing" element={<TechnicalWriting />} />
          <Route path="/solutions/no-code-websites" element={<NoCodeWebsites />} />
          <Route path="/solutions/business-automation" element={<BusinessAutomation />} />
          <Route path="/solutions/digital-career-marketing" element={<DigitalCareerMarketing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/seattle-ai-tech-directory" element={<SeattleAITechDirectory />} />
          <Route path="/ai-glossary" element={<AIGlossary />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;