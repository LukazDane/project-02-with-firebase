import React, { Component } from 'react';
import { withAuthorization } from '../../Session';
import { Header, Image, Segment, Container } from 'semantic-ui-react';

class Cities extends Component {
  setCity = (cityId) => (e) => {
    e.preventDefault();
    this.props.setCity(cityId);
  };

  render() {
    return (
      <div>
        <Header as="h1" attached="top">
          AttachedHeadr
        </Header>
        <h1>Cities</h1>
        <Container>
          <Segment.Group>
            <Segment>
              <Image
                src="/assets/SF1.jpg"
                as="a"
                size="massive"
                href="/"
                label={{
                  as: 'a',
                  color: 'black',
                  content: 'San Francisco',
                  icon: 'travel',
                  ribbon: true
                }}
                onClick={this.setCity('san-francisco')}
              />
              
            </Segment>
            <Segment>
              <Image
                src="/assets/London1.jpg"
                as="a"
                size="massive"
                href="/"
                label={{
                  as: 'a',
                  color: 'black',
                  content: 'London',
                  icon: 'travel',
                  ribbon: true
                }}
                name='london'
                onClick={this.setCity('london')}
              />
            </Segment>
            <Segment>
              <Image
                src="/assets/Sydney1.jpg"
                as="a"
                size="massive"
                href="/"
                label={{
                  as: 'a',
                  color: 'black',
                  content: 'Sydney',
                  icon: 'travel',
                  ribbon: true
                }}
                name='sydney'
                onClick={this.setCity('sydney')}
              />
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Cities);
