import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

import firestore from "../../components/firestore";


const db = firestore.firestore();


export const saveSale = (address, phone, name, totalPrice, productQuantity, cartProducts) => { //= product => (async  dispatch => {

  //console.log("product ", product);
  var docData = {
    "name": name,
    "phone": phone,
    "address": address,
    "productQuantity": productQuantity,
    "total": totalPrice,
    cartProducts
  };
  db.collection("sales").doc().set(docData).then(function () {
    console.log("Document successfully written!");
  });
  /* type: ADD_PRODUCT,
  payload: product */
}

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const changeProductQuantity = product => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});