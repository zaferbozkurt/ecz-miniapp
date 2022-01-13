import React from 'react';
import {Component} from 'ern-navigation';

import {Text} from 'react-native';

export default class Channels extends Component {
  render() {
    console.log('props', this.props);
    return <Text>channels</Text>;
  }
}
