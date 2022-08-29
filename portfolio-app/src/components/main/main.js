import React from "react";
import Landing from "./Landing";
import Technology from "./Technology";
import Projects from "./Projects";

export default function Main(props) {
  return (
    <React.Fragment>
      <Landing />
      <Technology />
      <Projects />
    </React.Fragment>
  );
}
