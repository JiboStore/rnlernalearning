import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './appnavigator'

const App = (props) => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default App;