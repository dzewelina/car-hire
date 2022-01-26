import React from "react";
import { shallow } from "enzyme";
import PlacesList from "./PlacesList";
import { PlacesTypes } from "../../consts";
import { testPlaces } from "../../test.data";

describe("PlacesList", () => {
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
