import React from 'react';
import {Component} from 'ern-navigation';

import {Text} from 'react-native';

export default class Channels extends Component {
  static displayName = 'Channels';

  // Code that sets the NavigationBar with Title and Icons.
  static navigationOptions = {
    title: 'Channels', //Page title
    buttons: [
      {
        icon: null,
        id: 'channels', //Id that will be used by native to notify react native when clicked
        location: 'right',
        accessibilityLabel: 'About the Movie List app',
      },
      {
        icon: null,
        id: 'refresh',
        location: 'right',
        accessibilityLabel: 'Refresh the list',
      },
    ],
  };

  render() {
    console.log('props', this.props);
    return <Text>channels</Text>;
  }
}
