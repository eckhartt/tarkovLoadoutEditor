import "./styles.css";
import { LoadoutSelection } from "./components/LoadoutSelection";

export default function App() {
  return (
    <div className="App">
      <h1>Tarkov Loadout Editor</h1>
      <LoadoutSelection />
    </div>
  );
}
