import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../helpers/WithStyles';

const available = {};

class Social extends Component {
  render() {
    const { url, rounded, type, directLink, className, style } = this.props;
    return directLink
      ? React.createElement(
          'a',
          {
            href: url,
            target: '_blank',
            className: `${className} SocialMediaShareButton`,
            style
          },
          React.createElement(available[type] ? available[type][1] : available.email[1], {
            round: rounded
          })
        )
      : React.createElement(
          available[type] ? available[type][0] : available.email[0],
          {
            className: `${className}`,
            url,
            media: 'Share in Pinterest',
            style
          },
          React.createElement(available[type] ? available[type][1] : available.email[1], {
            round: rounded
          })
        );
  }
}

Social.propTypes = {
  /**
   * Show buttons rounded or square.
   */
  rounded: PropTypes.bool,
  /**
   * Type of button. Possibles values are: <code>'email'</code>, <code>'facebook'</code>, <code>'google'</code>, <code>'linkedin'</code>, <code>'twitter'</code>, <code>'telegram'</code>, <code>'whatsapp'</code>, <code>'pinterest'</code>, <code>'vk'</code>, <code>'ok'</code>, <code>'reddit'</code>, <code>'tumblr'</code>, <code>'livejournal'</code>, <code>'email'</code>, <code>'viber'</code>
   */
  type: PropTypes.string,
  /**
   * Url to share.
   */
  url: PropTypes.string,
  /**
   * Indicates if it is redirected to a link within the social network or a floating window is displayed to share the link using the social network.
   */
  directLink: PropTypes.bool,
  /**
   * Class to apply.
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any)
};
Social.defaultProps = {
  rounded: true,
  type: 'email',
  url: '',
  directLink: true,
  className: '',
  style: null
};

export default withStyles(Social);
