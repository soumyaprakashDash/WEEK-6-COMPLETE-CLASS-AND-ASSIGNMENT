import React, { useLayoutEffect, useRef } from "react";

function LayoutExample() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log("Box height BEFORE paint:", boxRef.current.offsetHeight);
  }, []);

  return (
    <div ref={boxRef} style={{ padding: "20px", backgroundColor: "skyblue" }}>
      I am measured before paint!
    </div>
  );
}

export default LayoutExample;
