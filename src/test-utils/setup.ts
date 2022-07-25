import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/react";
import { expect } from "vitest";
import "jest-axe/extend-expect"; // should go on global config

expect.extend(matchers);
