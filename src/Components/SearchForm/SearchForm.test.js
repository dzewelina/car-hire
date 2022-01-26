import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";
import { text } from "../../consts";

describe("SearchForm", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<SearchForm />)));

  it("should render search form", () => {
    expect(wrapper.find("form").exists()).toBeTruthy();
  });

  it("should render search form with placeholder", () => {
    expect(wrapper.find("input").prop("placeholder")).toBe(
      text.placeholderText
    );
  });

  it("should render search form with label for screen reader", () => {
    expect(wrapper.find("input").prop("aria-label")).toBe(
      text.screenReaderLabel
    );
  });

  it("should render search form with title", () => {
    expect(wrapper.find("h1").text()).toBe(text.title);
  });

  it("should update search text on input change", () => {
    const { getByLabelText } = render(<SearchForm />);
    const input = getByLabelText(text.screenReaderLabel);
    fireEvent.change(input, { target: { value: "Manchester" } });
    expect(input.value).toBe("Manchester");
  });
});
