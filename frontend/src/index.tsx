import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global.styled";
import { Layout } from "./components/styles/Layout.styled";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";
import { theme } from "./utils/constants";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Layout>
        <Provider store={store}>
          <Container>
            <App />
          </Container>
        </Provider>
      </Layout>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
