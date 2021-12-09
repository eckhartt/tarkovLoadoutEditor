import "./styles.css";
import { ItemSelect } from "./components/ItemSelect";
import { helmetOptions, headsetOptions } from "./components/slotOptions";

export default function App() {
  return (
    <div className="App">
      <h1>Tarkov Loadout Editor</h1>
      <ItemSelect id="helmet" label="Helmet" options={helmetOptions} />
      <ItemSelect id="headset" label="Headset" options={headsetOptions} />
    </div>
  );
}
