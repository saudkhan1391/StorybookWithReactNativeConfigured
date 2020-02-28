import React from 'react';
import {Text} from 'react-native';

import {storiesOf} from '@storybook/react-native';
// import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import Login from './Login/Login';
import LoginWithEmail from './Login/LoginWithEmail';
import LoginWithPhone from './Login/LoginWithPhone';
import ForgetPassword from './Login/ForgetPassword';
import FurbabyDashboard from './Dashboard/FurbabyDashobard';
import Schedule from './Schedule/Schedule';
import InProgress from './InProgress/InProgress';
import AddEditTracker from './InProgress/AddEditTracker';
import NotesInProgress from './InProgress/NotesInProgress';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

// storiesOf('Button', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));
storiesOf('Login', module)
  .add('LoginMain', () => <Login />)
  .add('LoginWithEmail', () => <LoginWithEmail />)
  .add('LoginWithPhone', () => <LoginWithPhone />)
  .add('ForgetPassword', () => <ForgetPassword />);
storiesOf('Dashboard', module).add('FurbabyDashboard', () => (
  <FurbabyDashboard />
));
storiesOf('Schedule', module).add('schedule', () => <Schedule />);
storiesOf('InProgress', module)
  // .add('InProgress', () => <InProgress />)
  .add('InProgress', () => <InProgress /> )
  .add('AddEditTracker', () => <AddEditTracker />)
  .add('NotesInProgress', () => <NotesInProgress />);
