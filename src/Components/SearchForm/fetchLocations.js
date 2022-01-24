import axios from "axios";

const fetchLocations = async (location, numOfLoc) => {
  //   console.log("INSIDE FETCH!!!!!!");
  try {
    return await axios
      .get(
        `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numOfLoc}&solrTerm=${location}`
      )
      .then(({ data }) => data.results.docs);
  } catch (error) {
    console.log(error);
    return;
  }
};

export default fetchLocations;
