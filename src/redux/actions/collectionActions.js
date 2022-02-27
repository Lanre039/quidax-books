import { FETCH_COLLECTION } from "../types";

export const fetchCollections = (collections) => ({
  type: FETCH_COLLECTION,
  payload: collections,
});
