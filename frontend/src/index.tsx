import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/styles/Layout.styled';
import { Container } from './components/styles/Container.styled';

import { theme } from './utils/constants';
import GlobalStyles from './components/styles/Global.styled';
import Header from './components/Header';
import Footer from './components/Footer';

import App from './App';
import store from './store/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Header />
        <Provider store={store}>
          <Container>
            <App />
          </Container>
        </Provider>
        <Footer />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
