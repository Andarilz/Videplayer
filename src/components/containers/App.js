import React from 'react';
import WbnPlayer from "./WbnPlayer";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <BrowserRouter>
      <>
          <Switch>
              <Route path='/' exact component={WbnPlayer} />
              <Route path='/:activeVideo' exact component={WbnPlayer} />
          </Switch>

          <GlobalStyle />
      </>
  </BrowserRouter>
)

export default App;