import React from 'react';
import { LogBox } from 'react-native';
import Navigation from './app/Appnavigatore/Navigation';
import { Provider } from 'react-redux';
import configureStore from './app/Redux/configureStore';
import { Provider as PaperProvider } from 'react-native-paper';

const store = configureStore()
const APP1a = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
    <PaperProvider>
      <Navigation />
     </PaperProvider>
    </Provider>
  );
}

export default APP1a;








