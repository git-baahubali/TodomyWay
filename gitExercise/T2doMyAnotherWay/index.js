/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' });
