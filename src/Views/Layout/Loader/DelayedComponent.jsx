import React, { useState, useEffect } from "react";
import Loader from "./Loader"; // Adjust the import path as needed

const DelayedComponent = ({ children, delay = 3000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // While waiting, show the Loader component.
  return show ? children : <Loader />;
};

export default DelayedComponent;
