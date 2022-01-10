import "./App.css";
import Board from "./components/Board";

import "./styles/global/main.scss";

function App() {
  return (
    <div className="App">
      <Board initialDimensions={{ rows: 4, cols: 4 }} initialGameLength={5} />
    </div>
  );
}

export default App;
