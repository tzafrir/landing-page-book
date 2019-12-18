import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../../Container/Container';
import Button from '../../Button/Button';
import Header from '../../Header/Header';
import Image from '../../Image/Image';

class StarMeUpTemplate extends Component {
  render() {
    const { header, subHeader, callToAction, productImage } = this.props;
    return (
      <Container>
        <Image
          src={productImage.src}
          rounded
          width="160"
          alt={productImage.alt}
          className="main-logo"
        />
        <Header className="text-warning">{header}</Header>
        <Header type="h5" className="text-warning">
          {subHeader}
        </Header>
        <div className="mt-5">
          <Button>{callToAction.text}</Button>
        </div>
      </Container>
    );
  }
}

StarMeUpTemplate.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  callToAction: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.func,
    styles: PropTypes.object
  }),
  productImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.func
  })
};

StarMeUpTemplate.defaultProps = {
  header: 'Landing Page Book',
  subHeader: 'React components to build!',
  callToAction: {
    text: 'Explore',
    link: 'https://front10.com'
  },
  productImage: {
    src: 'images/logo/front10.png',
    alt: 'Front10 logo'
  }
};

export default StarMeUpTemplate;
