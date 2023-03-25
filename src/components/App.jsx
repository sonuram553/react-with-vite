import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const isMounted = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isMounted.current) {
      console.log("Updated!");
    } else {
      console.log("Mounted!");
      isMounted.current = true;
    }
  });

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  );
};

export default App;
