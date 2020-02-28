import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
// import Navigator1 from './Components/Navigation';
import StorybookUIRoot from './storybook';
// export default Navigator1;
const theme = {
  ...DefaultTheme,
  // roundness:2,
  // dark: true,
  // fonts: "thin",
  colors: {
    ...DefaultTheme.colors,
    // primary: 'tomato',
    // accent: 'yellow',
    // accent:"pink"
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme} >
      <StorybookUIRoot />
    </PaperProvider>
  );
}
// export default StorybookUIRoot;
