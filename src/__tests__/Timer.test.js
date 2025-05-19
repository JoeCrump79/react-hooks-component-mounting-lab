import React from "react";
import { render } from "@testing-library/react";
import Timer from "../Timer";

test("Timer mounts and unmounts without crashing", () => {
  const { unmount } = render(<Timer />);
  unmount();
});
