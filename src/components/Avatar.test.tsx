import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Avatar from "./Avatar";

test("1 is 1", async () => {
  await render(<Avatar />);
});
