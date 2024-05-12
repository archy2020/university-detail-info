import React from "react";
import { render, screen } from "@testing-library/react";
import ListingPage from "../ListView";

import ListingController from "../../../controller/ListingController";

jest.mock("../../../controller/ListingController", () => ({
  fetchUniversities: jest.fn(),
}));

describe("ListingPage Component", () => {




  it("renders without crashing", () => {
    render(<ListingPage />);
  });

  // test("should delete a university when delete button is clicked", async () => {
  //   // Mock data for universities
  //   const universities = [
  //     { name: "University 1", country: "Country 1" },
  //     { name: "University 2", country: "Country 2" },
  //   ];

  //   // Mock the fetchUniversities function
  //   (ListingController.fetchUniversities as jest.Mock).mockResolvedValue(
  //     universities
  //   );

  //   // Render the component
  //   const { getByText, queryByText } = render(<ListingPage />);

  //   // Mock the localStorage.setItem function
  //   const localStorageMock = jest.spyOn(
  //     window.localStorage.__proto__,
  //     "setItem"
  //   );

  //   // Simulate click on the delete button of University 1
  //   // fireEvent.click(getByText('Delete'));
  //   screen.logTestingPlaygroundURL();
  // });

  it("testing correct title of university list", () => {
    render(<ListingPage />);
    const title = screen.getByRole("heading", {
      name: /universities/i,
    });
    expect(title).toBeInTheDocument();
  });
});

it("testing testbox to be in document", () => {
  render(<ListingPage />);
  const title = screen.getByRole("textbox");
  expect(title).toBeInTheDocument();
});

it("testing dropdown  to be in document", () => {
  render(<ListingPage />);
  const title = screen.getByRole("combobox");
  expect(title).toBeInTheDocument();
});
// });
