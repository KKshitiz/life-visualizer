import "./App.css";
import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";

function App() {
 const path = window.location.pathname;

 switch (path) {
  case '/':
    case '/home':
      return <HomePage/>
  default:
    return <NotFound/>
 }
}

export default App;
