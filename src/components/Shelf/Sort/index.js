import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSort } from '../../../services/sort/actions';
import Selectbox from '../../Selectbox';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Menor a mayor valor' },
  { value: 'highestprice', label: 'Mayor a menor valor' }
];

const Sort = ({ updateSort, sort }) => (
  <div className="sort">
    Ordenado por
    <Selectbox options={sortBy} handleOnChange={value => updateSort(value)} />
  </div>
);

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
