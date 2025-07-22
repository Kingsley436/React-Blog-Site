import React, { useState, createContext, useContext } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Container fluid className="my-5 px-5">
              <BlogList />
            </Container>
          </>
        );
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentPage, navigateToPage }}>
      <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <Header />
        {renderCurrentPage()}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;