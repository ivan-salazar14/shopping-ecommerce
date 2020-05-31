import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';
import { storageRef } from '../../../firestore';

const Product = ({ product, addProduct }) => {
  product.quantity = 1;
  let formattedPrice = product.price;

  let productInstallment;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>O {product.installments} x</span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }


  async function getImage(image) {
    var promise = new Promise(function (resolve, reject) {
      storageRef.child(`images/${image}`).getDownloadURL().then((url) => {
        console.log('url  image', url)
        //   this.state.image = url
        //   this.setState(this.state)
        resolve(url);
      }).catch(function onError(err) {
        console.log("Error occured...image " + image);
        console.log(err);
      })
    })
  }

  function renderImage(nameImage) {
    let image_path = '';
    try {
      image_path = require(`../../../../static/products/${nameImage}_1.jpg`);
      return image_path;
    } catch (err) {
      return 'https://firebasestorage.googleapis.com/v0/b/think14.appspot.com/o/images%2F' + nameImage + '.jpg?alt=media'
    }

  }

  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Domicilio Gratis!</div>
      )}

      <Thumb
        classes="shelf-item__thumb"
        src={renderImage(product.sku)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice}</b>
          {/* <span>{toString(formattedPrice).substr(formattedPrice.length - 3, 3)}</span> */}
        </div>
        {productInstallment}
      </div>
      <div className="shelf-item__buy-btn">Agregar al carrito</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
