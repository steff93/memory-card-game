import "./App.scss";
import Board from "./components/Board/Board";
import { API_URL } from "./config";

function App() {
  console.log(API_URL);

  return <Board />;
}

export default App;
