import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import Button from "./Button";
import Field from "./Field";
import Input from "./Input";

afterEach(cleanup);

describe("UI contracts", () => {
  it("Should transmit the required state to the field", () => {
    render(
      <Field label="Nom" required>
        <Input />
      </Field>,
    );

    const input = screen.getByRole("textbox", { name: "Nom" });

    expect(input).toHaveProperty("required", true);
    expect(input.getAttribute("aria-required")).toBe("true");
  });

  it("Should associate an error with the field", () => {
    render(
      <Field label="Email" error="Invalid email address">
        <Input />
      </Field>,
    );

    const input = screen.getByRole("textbox", { name: "Email" });
    const error = screen.getByRole("alert");

    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(input.getAttribute("aria-describedby")).toBe(error.id);
  });

  it("Should disable a button while loading", () => {
    render(<Button loading>Enregistrer</Button>);

    const button = screen.getByRole("button", {
      name: "Enregistrer",
    });

    expect(button).toHaveProperty("disabled", true);
    expect(button.getAttribute("aria-busy")).toBe("true");
  });

  it("Should preserve the child accessibility properties", () => {
    render(
      <>
        <p id="custom-help">Custom help</p>

        <Field label="Name" hint="Field help">
          <Input required aria-describedby="custom-help" aria-invalid="grammar" />
        </Field>
      </>,
    );
    const input = screen.getByRole("textbox", { name: "Name" });

    expect(input).toHaveProperty("required", true);
    expect(input.getAttribute("aria-required")).toBe("true");
    expect(input.getAttribute("aria-invalid")).toBe("grammar");

    const describedBy = input.getAttribute("aria-describedby");

    expect(describedBy).toContain("custom-help");
    expect(describedBy).toContain("-hint");
  });
});
