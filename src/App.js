import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
// import PrivateRoute from "./utils/PrivateRoute";
import Loader from "./components/shared/Loader";
import "react-toastify/dist/ReactToastify.css";


const Home = React.lazy(() => import("./pages/Home"));
// const Signin = React.lazy(() => import("./pages/signin/signin.js"));


require("dotenv").config();

export const Toastify = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
      default:
        toast.info(msg);
        break;
  }
};

function App() {
  toast.configure({ hideProgressBar: true });
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/signin' component={Signin} /> */}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;