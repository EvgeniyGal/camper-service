import { createSelector } from "@reduxjs/toolkit";

export const advertsSelector = (state) => state.adverts.items;
export const favoritesSelector = (state) => state.favorites.items;
export const filtersLocationSelector = (state) => state.filters.location;
export const filtersFeaturesSelector = (state) => state.filters.features;
export const isModalDetailsOpenSelector = (state) =>
  state.appActions.isModalDetailsOpen;
export const currentAdvertIdSelector = (state) =>
  state.appActions.currentAdvert;

export const filteredAdvertsSelector = createSelector(
  [advertsSelector, filtersLocationSelector, filtersFeaturesSelector],
  (adverts, location, features) => {
    let result = location
      ? adverts.filter((advert) =>
          advert.location.toLowerCase().includes(location.toLowerCase())
        )
      : adverts;

    if (features.equipment.length > 0) {
      result = result.filter((advert) =>
        features.equipment.every(
          (feature) =>
            advert.details[feature] > 0 || advert[feature] === "automatic"
        )
      );
    }
    if (features.type.length > 0) {
      result = result.filter((advert) => features.type.includes(advert.form));
    }

    return result;
  }
);

export const favoritesAdvertsSelector = createSelector(
  [filteredAdvertsSelector, favoritesSelector],
  (filteredAdverts, favorites) => {
    return filteredAdverts.filter((advert) => favorites.includes(advert._id));
  }
);

export const currentAdvertSelector = createSelector(
  [advertsSelector, currentAdvertIdSelector],
  (adverts, currentIdAdvert) => {
    return currentIdAdvert
      ? adverts.find((advert) => advert._id === currentIdAdvert)
      : null;
  }
);
