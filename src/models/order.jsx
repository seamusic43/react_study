import PropTypes from 'prop-types';

const addressPropType = PropTypes.shape({
    address: PropTypes.string,
    detail_address: PropTypes.string,
    post_number: PropTypes.string,
});

// Then use it in a component
Order.propTypes = {
    id: PropTypes.number,
    order_number: PropTypes.string,
    brand_name: PropTypes.string,
    product_name: PropTypes.string,
    option: PropTypes.string,
    count: PropTypes.number,
    amount: PropTypes.instanceOf(Float32Array),
    address: addressPropType, // use the defined shape here
}

// eslint-disable-next-line no-undef
export default Order;