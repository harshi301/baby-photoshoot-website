import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index"; // Ensure this path correctly points to your Home component

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /capture precious moments/i, // Ensure this text matches exactly what's in your component
    });
    expect(heading).toBeInTheDocument();
  });
});
