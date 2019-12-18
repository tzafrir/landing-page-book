import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, type, children, style } = this.props;
    const componentClassName = `${className}`;
    return React.createElement(
      type,
      {
        className: componentClassName,
        style
      },
      [children]
    );
  }
}

Header.propTypes = {
  /**
   * Class name of header
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * Type of tag element. Can be <code>'h1'</code>, <code>'h2'</code>, <code>'h3'</code>, <code>'h4'</code>, <code>'h5'</code> and <code>'h6'</code>
   */
  type: PropTypes.string,
  /**
   * List of element to show inside as childrens.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Header.defaultProps = {
  className: '',
  style: null,
  type: 'h1',
  children: null
};

export default withStyles(Header);
