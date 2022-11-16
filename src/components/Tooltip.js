import React from "react";
import { useEffect, useState } from "react";

const Tooltip = ({ position }) => {
  //useState to get x and y coordinates
  const [dir, setDir] = useState("");
  const [xDir, setXDir] = useState(0);
  const [yDir, setYDir] = useState(0);

  //handlers to find direction
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      if (position) {
        setDir(position);
      } else if (event.screenX > xDir) {
        setDir("left");
        setXDir(event.screenX);
      } else if (event.screenX < xDir) {
        setDir("right");
        setXDir(event.screenX);
      } else if (event.screenY > yDir) {
        setDir("top");
        setYDir(event.screenY);
      } else {
        setDir("bottom");
        setYDir(event.screenY);
      }
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });

  //handlers to check if mouse is over text
  const [isIn, setIsIn] = useState(false);

  const handleMouseIn = (event) => {
    setIsIn(true);
  };
  const handleMouseOut = (event) => {
    setIsIn(false);
  };

  const hoverTool = (
    <div
      style={{
        color: "white",
        background: "black",
        width: "12rem",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        textAlign: "center",
      }}
    >
      Thanks for hovering! I'm a tooltip
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "30rem",
        }}
      >
        <div>
          <button
            style={{
              background: "white",
              border: "1px dotted white",
              borderBottom: "1px dashed grey",
              color: "gray",
              height: "1.25rem",
              margin: "1rem",
              position: "absolute",
              left: "45%",
              top: "45%",
            }}
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
          >
            Hover over me!
          </button>
        </div>
        <div style={{ position: "absolute", left: "30%", top: "45%" }}>
          {isIn && dir === "left" && (
            <>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "0.75rem solid transparent",
                  borderLeft: "0.75rem solid black",
                  borderBottom: "0.75rem solid transparent",
                  marginTop: "1rem",
                  position: "absolute",
                  left: "100%",
                  top: "0%",
                }}
              ></div>
              {hoverTool}
            </>
          )}
        </div>
        <div style={{ position: "absolute", left: "55%", top: "45%" }}>
          {isIn && dir === "right" && (
            <>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "0.75rem solid transparent",
                  borderRight: "0.75rem solid black",
                  borderBottom: "0.75rem solid transparent",
                  marginTop: "1rem",
                  position: "absolute",
                  left: "-5%",
                  top: "0%",
                }}
              ></div>
              {hoverTool}
            </>
          )}
        </div>
        <div style={{ position: "absolute", left: "43%", top: "37%" }}>
          {isIn && dir === "top" && (
            <>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "0.75rem solid transparent",
                  borderRight: "0.75rem solid transparent",
                  borderTop: "0.75rem solid black",
                  marginLeft: "6rem",
                  position: "absolute",
                  left: "0%",
                  top: "100%",
                }}
              ></div>
              {hoverTool}
            </>
          )}
        </div>
        <div style={{ position: "absolute", left: "43%", top: "52%" }}>
          {isIn && dir === "bottom" && (
            <>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "0.75rem solid transparent",
                  borderRight: "0.75rem solid transparent",
                  borderBottom: "0.75rem solid black",
                  marginLeft: "6rem",
                }}
              ></div>
              {hoverTool}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
