import {LogBox} from 'react-native';
import Channels from './src/channels/channels';
import NewsFeed from './src/newsfeed/newsfeed';
import {name as appName} from './app.json';
import {AppNavigator} from 'ern-navigation';

LogBox.ignoreLogs([
  'Module ElectrodeBridgeTransceiver requires main queue setup since it overrides `constantsToExport`',
  'Sending `electrode.bridge.message` with no listeners registered.',
]);
// AppRegistry.registerComponent(appName, () => App);
const appNavigator = new AppNavigator(
  {
    Channels: Channels,
    NewsFeed: NewsFeed,
  },
  {
    initialScreen: 'NewsFeed',
  },
);

appNavigator.registerAll(appName);
