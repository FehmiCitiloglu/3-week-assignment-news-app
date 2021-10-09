import { Route, Switch } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryNews from "./pages/CategoryNews";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Categories />
        </Route>
        <Route path="/news/:category">
          <CategoryNews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
