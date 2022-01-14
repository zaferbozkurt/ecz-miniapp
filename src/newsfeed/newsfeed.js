import React from 'react';
import {Component} from 'ern-navigation';

import {Text, TouchableOpacity} from 'react-native';

export default class Newsfeed extends Component {
  static displayName = 'Newsfeed';

  // Code that sets the NavigationBar with Title and Icons.
  static navigationOptions = {
    title: 'Newsfeed', //Page title
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

  constructor(props) {
    super(props);
    this.resetNavigationBar();
  }

  // This method would be invoked if any one of the buttons in the navigationOptions is pressed.
  onNavButtonPress(buttonId) {
    switch (buttonId) {
      case 'channels':
        this.navigateInternal('Channels');
        break;
      case 'refresh':
        this.navigateInternal('Channels');
        break;
      default:
        break;
    }
  }

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
