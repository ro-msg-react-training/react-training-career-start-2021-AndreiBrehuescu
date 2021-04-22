import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TableProducts} from './components/testProducts'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import {IconButton, ThemeProvider} from '@material-ui/core';
import theme from './styles/tableTheme';
import Header from './Header';
import Clock from './components/clock';

export const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/products" />
            </Route>
            <Route path='/product/:number' component={ProductDetails} />
            <Route exact path='/products' component={TableProducts} />
            <Route exact path='/test' component={Clock} />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}
