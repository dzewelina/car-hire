import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import SearchForm from "./Components/SearchForm/SearchForm";

describe("App", () => {
  it("should include SearchForm", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchForm).exists()).toBeTruthy();
  });
});
