import PropTypes from 'prop-types';


function MenuItem({ text }) {
    return (
        <li className={this.props.className}>
            <i className={this.props.icon}></i>
            {text}
        </li>
    );
}

MenuItem.propTypes = {
    text: PropTypes.string,
};

export default MenuItem;