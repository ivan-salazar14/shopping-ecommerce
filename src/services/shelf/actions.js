import { FETCH_PRODUCTS } from './actionTypes';
import firestore from "../../components/firestore";

const db = firestore.firestore();

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};
export const fetchProducts = (filters, sortBy, callback) => async dispatch => {

  db.collection("products").get().then(function (querySnapshot) {

    var products = querySnapshot.docs.map(function (documentSnapshot) {
      return documentSnapshot.data();
    });

    if (!!filters && filters.length > 0) {
      products = products.filter(p =>
        filters.find(f => p.availableSizes.find(size => size === f))
      );
    }

    if (!!sortBy) {
      products = products.sort(compare[sortBy]);
    }

    if (!!callback) {
      callback();
    }

    return dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    });
  })

}