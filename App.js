import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MyCourses from './components/CoursesPage/MyCourses'
import Discover from './components/Discover'
import Messages from './components/Messages'
import Notifications from './components/Notifications'
import Profiles from './components/Profiles'

const Tab = createBottomTabNavigator()


const App = () => {

  return (
    <NavigationContainer >
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#68c8ff',
          style: { height: 80 },
          tabStyle: {
            marginBottom: 15
          }
        }}>
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({size, color}) => (
              <Icon name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MyCourses"
          component={MyCourses}
          options={{
            tabBarLabel: 'My Courses',
            tabBarIcon: ({ size, color }) => (
              <Icon name="book" size={size} color={color}/>
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({size, color}) => (
              <Icon name="folder" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          tabStyle={{ backgroundColor: 'green' }}
          name="Notifactions"
          component={Notifications}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({size, color}) => (
              <Icon name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="profiles"
          component={Profiles}
          options={{
            tabBarLabel: 'Profiles',
            tabBarIcon: ({size, color}) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   navigationContainer: {
//     backgroundColor: 'green'
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
