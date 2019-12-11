'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Section',
  summary: 'A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information.',
  import: '',
  withStyles: true,
  extractProps: ['title', 'subTitle'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Section bgColor="light" title="Introduction" subTitle="Once upon a time...">\n    <Container>\n        <Paragraph text={`Once upon a time, there was a boy named James. \n        He always got pushed around. One day, a wizard appeared in front of the boy. \n        The wizard gave James three wishes. One of James wishes was that tge \n        wizard could make James go away. The next day James tried to make a wish, \n        but he found himself to be in the land of the forgotten.`} />\n    </Container>\n</Section>',
    tabsActive: ['code']
  }, {
    name: 'With Video',
    summary: '',
    code: '<Section title="WHAT WE DO" subTitle="One Look Is Worth A Thousand Words."  textAlign="center">\n    <Container>\n        <Video source="https://youtu.be/dCrLwWdju68"/>\n        <Button color="warning">Explore</Button>\n    </Container>\n</Section>',
    tabsActive: []
  }, {
    name: 'Two Columns Text',
    summary: '',
    code: '<Section title="WHO WE ARE ?" subTitle="One Look Is Worth A Thousand Words.">\n    <Container className="text-justify">\n        <Row>\n            <Column className="col-12 col-sm-6">\n                <Paragraph text={`We are a group of talented software developers with more than \n                10 years of experience creating front-end applications. We are tired to see how many\n                 brilliant minds are reworking in the same thing because there are not \n                 standar and defined processes. We are tired of seeing how many companies are \n                 struggling to find good programmers. We are tired of seeing how there a lot of \n                 software in a trash because somebody does not defined the requirements at the right time.`} />\n            </Column>\n            <Column className="col-12 col-sm-6">\n                <Paragraph text={`We are tired of seeing great people which talent is not being used \n                100% because they had not being trained in a proper way. We are tired of seeing \n                projects that ended up in a failure just because the team that executed them does not\n                receive the proper advice in time. We are tired of seeing companies investing a lot \n                of money building software that does not scale.`} />\n                <Paragraph text={`We are the guys that believes that fixing all this issues is critical\n                for our civilization. We are the guys that are going to go to the roots of all of this\n                problems and are going to fixed it.`} />\n            </Column>\n        </Row>\n    </Container>\n</Section>',
    tabsActive: []
  }, {
    name: 'Two Columns Cards',
    summary: '',
    code: '<Section\n    title="COMPONENT-DRIVEN DEVELOPMENT"\n    subTitle="Build UIs in a better way: from the component up">\n  <Container className="text-justify">\n    <Row>\n      <Column className="col-12 col-md-6">\n        <div>\n          <Card\n            contentAlign="left"\n            image="https://front10.com/landing-page-book/images/card/image1.jpg"\n            imageCircle={false}\n            subTitle="A tool for Component-Driven Development"\n            summary={`A component explorer is a separate application which showcases the components in \n            your app in various test \u201Cstates\u201D. A state is essentially a visual test case an typical input \n            to the component.`}\n            title="Component Explorer"/>\n        </div>\n      </Column>\n      <Column className="col-12 col-md-6">\n        <Paragraph text={`He biggest trend in frontend user interface (UI) development for the web\n                in recent years has been towards components. The React library, although by no means the first,\n                has in large part established patterns for building UIs out of well specified component parts.`} />\n        <Paragraph text={`Of course, the trend toward software built from smaller pieces that perform \n                a well-specified role is nothing new; modularization has been one of the key tenets of software\n                engineering since long before I learned the concepts of \u201Ccoupling and cohesion\u201D.`} />\n      </Column>\n    </Row>\n  </Container>\n</Section>',
    tabsActive: []
  }]
};