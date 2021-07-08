import React from 'react';
import WbnPlayer from "./WbnPlayer";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
      <Switch>
          <Route path='/' exact component={WbnPlayer} />
          <Route path='/:activeVideo' exact component={WbnPlayer} />
      </Switch>
  </BrowserRouter>
)

export default App;