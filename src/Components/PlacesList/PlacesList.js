import React from "react";
import { PlacesTypes } from "../../consts";
import "./PlacesList.css";

const PlacesList = ({ places }) => (
  <ul>
    {places.map(({ placeKey, placeType, name, city, region, country }) => {
      const kindOfPlace = PlacesTypes[placeType];
      const description = [city, region, country].filter(Boolean).join(", ");

      return (
        <li key={placeKey}>
          <div className="li-element">
            {Boolean(kindOfPlace) && (
              <span className={`li-place-type ${kindOfPlace}`}>
                {kindOfPlace}
              </span>
            )}
            <div className="li-place-info">
              <p className="li-place-name">{name}</p>
              <p className="li-place-description">{description}</p>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
);

export default PlacesList;
