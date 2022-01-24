import React from "react";
import { shallow } from "enzyme";
import SearchForm, { text, PlacesList, PlacesTypes } from "./SearchForm";

// should not display results if single alphanumeric character entered
// should display results if 2 alphanumeric characters entered
// should display results if more than 2 alphanumeric characters entered
// should display max 6 results
// should display message when input is not recognised (asdf1234, No results found)
// should not display results when search term truncated leaving only 1 character

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

describe("PlacesList", () => {
  const testPlaces = [
    {
      city: "Manchester",
      country: "United Kingdom",
      name: "Manchester Airport",
      placeKey: "1472187",
      placeType: "A",
      region: "Greater Manchester",
    },
    {
      country: "United Kingdom",
      name: "Manchester",
      placeKey: "441725",
      placeType: "C",
      region: "Greater Manchester",
    },
    {
      city: "Manchester",
      country: "United Kingdom",
      name: "Stockport",
      placeKey: "445131",
      placeType: "C",
    },
  ];
  it("should not display results if no places", () => {
    const wrapper = shallow(<PlacesList places={[]} />);
    expect(wrapper.find("li").length).toBe(0);
  });

  it("should display results if places given", () => {
    const wrapper = shallow(<PlacesList places={testPlaces} />);
    expect(wrapper.find("li").length).toBe(3);
  });

  it("should display mapped place type correctly", () => {
    const wrapper = shallow(<PlacesList places={testPlaces} />);
    const firstPlace = wrapper.find("li").at(0);
    const expectedText = PlacesTypes[testPlaces[0].placeType];
    expect(firstPlace.find("span").text()).toBe(expectedText);
  });

  it("should display place name", () => {
    const wrapper = shallow(<PlacesList places={testPlaces} />);
    const secondPlace = wrapper.find("li").at(1);
    const expectedText = testPlaces[1].name;
    expect(secondPlace.find("p").at(0).text()).toBe(expectedText);
  });

  it("should display place description correctly", () => {
    const wrapper = shallow(<PlacesList places={testPlaces} />);
    const firstPlace = wrapper.find("li").at(0);
    const secondPlace = wrapper.find("li").at(1);
    const thirdPlace = wrapper.find("li").at(2);
    expect(firstPlace.find("p").at(1).text()).toBe(
      "Manchester, Greater Manchester, United Kingdom"
    );
    expect(secondPlace.find("p").at(1).text()).toBe(
      "Greater Manchester, United Kingdom"
    );
    expect(thirdPlace.find("p").at(1).text()).toBe(
      "Manchester, United Kingdom"
    );
  });
});
