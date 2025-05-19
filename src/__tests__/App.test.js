import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("<App /> renders and includes one timer after mount", () => {
  const { container } = render(<App />);
  const timerGrid = container.querySelector(".TimerGrid");

  // Expect one child div.timer to be rendered initially
  expect(timerGrid.children.length).toBe(1);
});
