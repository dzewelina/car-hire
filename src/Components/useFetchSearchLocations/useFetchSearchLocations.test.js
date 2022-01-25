import { renderHook } from "@testing-library/react-hooks";
import useFetchSearchLocations from "../useFetchSearchLocations/useFetchSearchLocations";
import * as fetchLocations from "../../Functions/fetchLocations";
import * as useDebounce from "../../Functions/useDebounce";

describe("useFetchSearchLocations", () => {
  let mockedFetchLocations;

  beforeEach(() => {
    jest.spyOn(fetchLocations, "default");
    mockedFetchLocations = fetchLocations.default;
  });

  afterEach(() => jest.clearAllMocks());

  it("should not call api if location not given", () => {
    renderHook(() => useFetchSearchLocations());
    expect(mockedFetchLocations).not.toHaveBeenCalled();
  });

  it("should not call api with single alphanumeric characters", () => {
    renderHook(() => useFetchSearchLocations("m"));
    expect(mockedFetchLocations).not.toHaveBeenCalled();
  });

  it("should call api with 2 alphanumeric characters", () => {
    renderHook(() => useFetchSearchLocations("ma"));
    expect(mockedFetchLocations).toHaveBeenCalled();
  });

  it("should call api with 2 or more alphanumeric characters", () => {
    renderHook(() => useFetchSearchLocations("manchester"));
    expect(mockedFetchLocations).toHaveBeenCalled();
  });

  it("should call api requesting 6 results", () => {
    renderHook(() => useFetchSearchLocations("manchester"));
    expect(mockedFetchLocations).toHaveBeenCalledWith("manchester", 6);
  });

  it("should debounce reguested  search text", () => {
    jest.spyOn(useDebounce, "default");
    const mockedUseDebounce = useDebounce.default;
    renderHook(() => useFetchSearchLocations("manchester"));

    expect(mockedUseDebounce).toHaveBeenCalledWith("manchester", 500);
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
