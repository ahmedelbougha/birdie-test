import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import {
  Container,
  Footer,
  GlobalStyles,
  Header,
  Layout,
  Spinner
} from "./components";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";
import { theme } from "./utils/constants";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
