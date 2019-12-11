import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyHero from 'react-lazy-hero';
import extractProps from '../../helpers/ExtractProps';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Header from '../Header/Header';
// import StarMeUpTemplate from './templates/StarMeUpTemplate';
import { crazyStars } from './particlesSugarMapping';
import withStyles from '../../helpers/WithStyles';

class Hero extends Component {
  static onButtonClick(button) {
    if (button.onClick && typeof button.onClick === 'function') button.onClick({ button });
  }

  static getCustomCssFilterForImg(props, state) {
    const { imgCssFilter } = props;
    const { randomClass } = state;
    return `
    .Hero.${randomClass} [src] {
      filter: ${imgCssFilter};
    }`;
  }

  static getParticlesParams(particles, particlesSugar, particlesParams) {
    if (particlesParams) {
      return particlesParams;
    }
    if (!particlesParams && particlesSugar && particlesSugar === 'crazyStars') {
      return crazyStars;
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {
      randomClass: `Hero_${new Date().getTime()}_${Math.random()
        .toString()
        .replace('.', '')}`
    };
  }
  // static getTemplate(template) {
  //   if(template && template === 'starMeUp'){
  //     return StarMeUpTemplate;
  //   }
  //   return {};
  // }

  render() {
    const {
      image,
      parallaxOffset,
      isFixed,
      isCentered,
      overlayColor,
      opacity,
      header,
      subHeader,
      minHeight,
      subHeaderPosition,
      particles,
      backgroundColor,
      callToAction,
      children,
      style,
      imgCssFilter,
      callToActionOnClick,
      callToActionColor,
      callToActionOutline,
      secondaryCallToAction,
      secondaryCallToActionOnClick,
      secondaryCallToActionColor,
      secondaryCallToActionOutline
    } = this.props;

    const { randomClass } = this.state;

    const customCssFilter = Hero.getCustomCssFilterForImg(this.props, this.state);

    const newStyles = Object.assign({}, backgroundColor, style);
    return (
      <div className={`Hero ${randomClass}`} style={{ newStyles }}>
        <LazyHero
          isFixed={isFixed}
          isCentered={isCentered}
          imageSrc={image}
          opacity={opacity}
          color={overlayColor}
          parallaxOffset={parallaxOffset}
          minHeight={minHeight}
          style={style}
        >
          {particles && <div className="Hero__Particles" />}
          <div className="Hero__Container d-flex align-content-center">
            {/* {!children && template && (
             <TemplateComponent {...this.props.templateProps} {...this.props}/>
            )} */}
            {!children && (
              <Container>
                {subHeader &&
                  subHeaderPosition === 'top' && (
                    <Header
                      textAlign={isCentered && 'center'}
                      className="Hero__SubHeader"
                      {...extractProps('subHeader', this.props)}
                    >
                      {subHeader}
                    </Header>
                  )}
                {header && (
                  <Header className="Hero__Header" {...extractProps('header', this.props)}>
                    {header}
                  </Header>
                )}
                {subHeader &&
                  subHeaderPosition !== 'top' && (
                    <Header
                      textAlign={isCentered && 'center'}
                      type="h2"
                      className="Hero__SubHeader"
                      {...extractProps('subHeader', this.props)}
                    >
                      {subHeader}
                    </Header>
                  )}
                {callToAction && (
                  <Button
                    className="btn-xl Hero__Button"
                    onClick={callToActionOnClick}
                    color={callToActionColor}
                    outline={callToActionOutline}
                    {...extractProps('callToAction', this.props)}
                  >
                    {callToAction}
                  </Button>
                )}
                {secondaryCallToAction && (
                  <Button
                    className="btn-xl Hero__Button"
                    onClick={secondaryCallToActionOnClick}
                    color={secondaryCallToActionColor}
                    outline={secondaryCallToActionOutline}
                    {...extractProps('secondaryCallToAction', this.props)}
                  >
                    {secondaryCallToAction}
                  </Button>
                )}
              </Container>
            )}
            {children}
          </div>
          {imgCssFilter && <style>{customCssFilter}</style>}
        </LazyHero>
      </div>
    );
  }
}

Hero.propTypes = {
  /**
   * Define if background image is fixed
   */
  isFixed: PropTypes.bool,
  /**
   *  Define if content is centered
   */
  isCentered: PropTypes.bool,
  /**
   * Define if component show particles animations
   */
  particles: PropTypes.bool,
  /**
   * Opacity level
   */
  opacity: PropTypes.number,
  /**
   * Offset of background image
   */
  parallaxOffset: PropTypes.number,
  /**
   * Url of background image
   */
  image: PropTypes.string,
  /**
   * Overlay color of the component
   */
  overlayColor: PropTypes.string,
  /**
   *  Header of the hero
   */
  header: PropTypes.string,
  /**
   * Sub header of the hero
   */
  subHeader: PropTypes.string,
  /**
   * Position of hero sub header. Can be <code>'top'</code> or <code>'bottom'</code>
   */
  subHeaderPosition: PropTypes.string,
  /**
   * Min height of hero
   */
  minHeight: PropTypes.string,
  /**
   * Background color of the hero
   */
  backgroundColor: PropTypes.string,
  /**
   * Margin bottom of hero header
   */
  headerMarginBottom: PropTypes.string,
  /**
   * Color of hero header
   */
  headerTextColor: PropTypes.string,
  /**
   * Margin bottom of hero subheader
   */
  subHeaderMarginBottom: PropTypes.string,
  /**
   * Color of hero subheader
   */
  subHeaderTextColor: PropTypes.string,
  /**
   * Hero call to action
   */
  callToAction: PropTypes.string,
  /**
   * Config params for particles animation.
   */
  particlesParams: PropTypes.objectOf(PropTypes.any),
  /**
   *  Elements to show inside of Hero.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Customs styles to tramsform your Hero
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * The filter property defines visual effects (like blur and saturation) to an element (often <img>).
   */
  imgCssFilter: PropTypes.string,
  /**
   * Preconfigured params for particles, you can find this on particlesSugarMapping.js file.
   */
  particlesSugar: PropTypes.string,
  /**
   * Event is fire when call to action button is pressed
   */
  callToActionOnClick: PropTypes.func,
  /**
   * Color of call to action button
   */
  callToActionColor: PropTypes.string,
  /**
   * Outline of call to action button
   */
  callToActionOutline: PropTypes.bool,
  /**
   * Event is fire when secondary call to action button is pressed
   */
  secondaryCallToActionOnClick: PropTypes.func,
  /**
   * Color of secondary call to action button
   */
  secondaryCallToActionColor: PropTypes.string,
  /**
   * Outline of secondary call to action button
   */
  secondaryCallToActionOutline: PropTypes.bool,
  /**
   * Define header font size
   */
  headerFontSize: PropTypes.string,
  /**
   * Define sub header font size
   */
  subHeaderFontSize: PropTypes.string,
  /**
   * Define header font size on <code>sm</code> screen
   */
  headerFontSizeSm: PropTypes.string,
  /**
   * Define sub header font size on <code>sm</code> screen
   */
  subHeaderFontSizeSm: PropTypes.string,
  /**
   * Define sub header font size on <code>md</code> screen
   */
  headerFontSizeMd: PropTypes.string,
  /**
   * Define sub header font size on <code>md</code> screen
   */
  subHeaderFontSizeMd: PropTypes.string
};
Hero.defaultProps = {
  isFixed: true,
  isCentered: true,
  particles: true,
  opacity: 0,
  parallaxOffset: 0,
  image: '',
  overlayColor: '#fff',
  header: '',
  subHeader: '',
  subHeaderPosition: 'bottom',
  minHeight: '100vh',
  backgroundColor: 'transparent',
  headerMarginBottom: '5',
  subHeaderMarginBottom: '5',
  headerTextColor: 'light',
  subHeaderTextColor: 'light',
  callToAction: null,
  particlesParams: null,
  children: null,
  style: null,
  imgCssFilter: null,
  particlesSugar: null,
  callToActionColor: '',
  callToActionOutline: true,
  callToActionOnClick: () => {},
  secondaryCallToActionColor: '',
  secondaryCallToActionOutline: true,
  headerFontSize: '3',
  subHeaderFontSize: '1',
  headerFontSizeSm: '5',
  subHeaderFontSizeSm: '2',
  headerFontSizeMd: '7',
  subHeaderFontSizeMd: '3',
  secondaryCallToActionOnClick: () => {}
};

export default withStyles(Hero);
