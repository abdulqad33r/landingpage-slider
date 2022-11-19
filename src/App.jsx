import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="nav-items">
      <div className={`navItems-item ${open1 ? "open" : "close"}`}>
        {!open1 ? (
          <button
            onClick={() => {
              setOpen1(!open1);
              setOpen2(false);
              setOpen3(false);
              setOpen4(false);
            }}
          >
            A
          </button>
        ) : (
          <div>This is only the design</div>
        )}
      </div>

      <div className={`navItems-item ${open2 ? "open" : "close"}`}>
        {!open2 ? (
          <button
            onClick={() => {
              setOpen2(!open2);
              setOpen1(false);
              setOpen3(false);
              setOpen4(false);
            }}
          >
            B
          </button>
        ) : (
          <div>Here is the B body</div>
        )}
      </div>

      <div className={`navItems-item ${open3 ? "open" : "close"}`}>
        {!open3 ? (
          <button
            onClick={() => {
              setOpen3(!open3);
              setOpen1(false);
              setOpen2(false);
              setOpen4(false);
            }}
          >
            C
          </button>
        ) : (
          <div>Here is the C body</div>
        )}
      </div>

      <div className={`navItems-item ${open4 ? "open" : "close"}`}>
        {!open4 ? (
          <button
            onClick={() => {
              setOpen4(!open4);
              setOpen1(false);
              setOpen2(false);
              setOpen3(false);
            }}
          >
            D
          </button>
        ) : (
          <div>Here is the D body</div>
        )}
      </div>
    </div>
  );
}

export default App;
