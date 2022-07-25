import * as rtl from "@testing-library/react";
import { ReactElement, JSXElementConstructor } from "react";
import { axe } from "jest-axe";

type Ui = ReactElement<any, string | JSXElementConstructor<any>>;
type Options = rtl.RenderOptions<typeof rtl.queries, HTMLElement, HTMLElement>;

async function render(ui: Ui, options?: Options) {
  const rendered = rtl.render(ui, options);
  const results = await axe(rendered.container);
  expect(results).toHaveNoViolations();
  return rendered;
}

export { render };
