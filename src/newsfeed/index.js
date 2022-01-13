import React from 'react';
import {Component} from 'ern-navigation';

import {Text, TouchableOpacity} from 'react-native';

export default class Newsfeed extends Component {
  handlePress = () => {
    this.navigateInternal('Channels');
  };
  render() {
    console.log('props', this.props);
    return (
      <TouchableOpacity
        style={{
          marginTop: 50,
          padding: 20,
          backgroundColor: 'red',
        }}
        onPress={this.handlePress}>
        <Text>Newsfeed</Text>
      </TouchableOpacity>
    );
  }
}
