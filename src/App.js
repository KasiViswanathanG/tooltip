import { useState } from "react";
import Tooltip from "./components/Tooltip";

export default function App() {
  const [position, setPosition] = useState("");

  const handleChange = (event) => {
    setPosition(event.target.value);
  };
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "45%",
        }}
      >
        <span style={{ paddingRight: "1rem" }}>Select Position</span>
        <select value={position} onChange={handleChange}>
          <option value="">Default</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>
      <Tooltip position={position} />
    </div>
  );
}
