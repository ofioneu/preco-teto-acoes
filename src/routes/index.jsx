import { Route, BrowserRouter } from "react-router-dom";
import CeilingPrice from "../Pages/CeilingPrice";
import PrivacyPollicy from "../Pages/PrivacyPolicy";
import HeaderPages from '../Components/Header'

 function RoutesApp() {
  return (
    <BrowserRouter>
    <HeaderPages/>
      <Route>
        <Route exact path="/celling-price" component={CeilingPrice} />
        <Route exact path="/privacy-pollicy" component={PrivacyPollicy} />
      </Route>
    </BrowserRouter>
  );
}

export default RoutesApp