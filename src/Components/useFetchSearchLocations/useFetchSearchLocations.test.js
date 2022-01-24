import { renderHook } from "@testing-library/react-hooks";
import useFetchSearchLocations from "../useFetchSearchLocations/useFetchSearchLocations";
import fetchLocations from "../../Functions/fetchLocations";

jest.mock("../../Functions/fetchLocations");

describe("useFetchSearchLocations", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not call api if location not given", () => {
    renderHook(() => useFetchSearchLocations());
    expect(fetchLocations).not.toHaveBeenCalled();
  });

  it("should not call api with single alphanumeric characters", () => {
    renderHook(() => useFetchSearchLocations("m"));
    expect(fetchLocations).not.toHaveBeenCalled();
  });

  it("should call api with 2 alphanumeric characters", () => {
    renderHook(() => useFetchSearchLocations("ma"));
    expect(fetchLocations).toHaveBeenCalled();
  });

  it("should call api with 2 or more alphanumeric characters", () => {
    renderHook(() => useFetchSearchLocations("manchester"));
    expect(fetchLocations).toHaveBeenCalled();
  });

  it("should call api requesting 6 results", () => {
    renderHook(() => useFetchSearchLocations("manchester"));
    expect(fetchLocations).toHaveBeenCalledWith("manchester", 6);
  });

  //   it("should save message when input is not recognised", () => {
  //     fetchLocations.mockImplementation(
  //       () => new Promise(() => [{ name: "No results found" }])
  //     );

  //     const { result } = renderHook(() => useFetchSearchLocations("manchester"));
  //     // expect(fetchLocations).toReturnWith({});
  //     expect(result).toEqual([]);
  //   });
});
