// src/App.js
import React from 'react';
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { hot } from 'react-hot-loader';
import Footer from './Footer'; // Import the Footer component

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default hot(module)(App);
