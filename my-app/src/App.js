// import { makeStyles} from "@material-ui/core";
import { Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import Routes from "./routes";

function App() {
  
  return (
    <div >
      <Header />
      <Switch>
        <Routes />
      </Switch>
      <StickyFooter />
    </div>
  );
}
export default App;
