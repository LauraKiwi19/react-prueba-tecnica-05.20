import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'



const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  background-color: white;
  height: 100vh;
  display: flex;
`


function App() {

  return (
    <MainWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

    </MainWrapper>
  );
}

export default App;
