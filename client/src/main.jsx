import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


import store from "./store/index";
import { persistor } from "./store/index";

import "./index.css";
import App from "./App";
import '../i18n';



import { ThemeProvider } from "@material-tailwind/react";
import {LanguageInitializer} from "./hooks/Languageinitializer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Provider store={store}>
        <LanguageInitializer>
          <ThemeProvider>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </ThemeProvider>
        </LanguageInitializer>
      </Provider>
    </Router>
  </>
);
