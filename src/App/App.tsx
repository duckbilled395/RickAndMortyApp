import React from "react";
import { Provider } from "react-redux";

import store from "../shared/store";
import Layout from "../shared/components/Layout/Layout";

import "./styles/app.scss";

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
