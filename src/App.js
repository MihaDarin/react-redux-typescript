import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.PointReducer.points);

  const addPoint = (point) => {
    dispatch({ type: "ADD_POINT", payload: point });
  };

  const crushPoint = (point) => {
    dispatch({ type: "CRUSH_POINT", payload: point });
  };

  return (
    <div className="App">
      <div style={{ fontSize: "20px" }}>{points}</div>
      <button onClick={() => addPoint(Number(prompt()))}>Add Point</button>
      <button onClick={() => crushPoint(Number(prompt()))}>Crush Point</button>
    </div>
  );
}

export default App;
