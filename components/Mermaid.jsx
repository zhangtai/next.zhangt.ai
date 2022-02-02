import React, { useEffect } from "react"
import mermaid from "mermaid"

mermaid.initialize({
  startOnLoad: true,
  theme: "base",
  securityLevel: "loose",
  // themeVariables: { 'primaryColor': '#ff0000'}
});

const Mermaid = ({chart}) => {
  useEffect(() => {
    mermaid.contentLoaded();
  });
  return <div className="mermaid">{chart}</div>;
};

export default Mermaid
