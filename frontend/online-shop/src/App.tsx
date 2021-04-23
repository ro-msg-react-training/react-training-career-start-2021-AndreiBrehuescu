import "./App.css";
import { TableProducts } from "./components/Products";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import { ThemeProvider } from "@material-ui/core";
import theme from "./styles/tableTheme";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Redirect to="/products" />
              </Route>
              <Route path="/product/:number" component={ProductDetails} />
              <Route exact path="/products" component={TableProducts} />
            </Switch>
          </main>
        </div>
      </Provider>
    </ThemeProvider>
  );
};
