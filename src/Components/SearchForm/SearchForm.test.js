import React from "react";
import { shallow } from "enzyme";
import SearchForm, { text } from "./SearchForm";

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
});
