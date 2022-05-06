import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExerciseHomeScreen,ExerciseDetailsScreen,ScheduleScreen, SettingsScreen } from '../screens';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../constants';

const Stack = createStackNavigator();
const StackNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName={'ExercisesHomeScreen'} headerMode="none">
            <Stack.Screen name="ExercisesHomeScreen" component={ExerciseHomeScreen}/>
            <Stack.Screen name="ExercisesDetailsScreen" component={ExerciseDetailsScreen}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height: 55,
                },
            }}
            initialRouteName="AllExercises"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) =>{
                    const icons = {
                        Schedule: 'calendar',
                        AllExercises: "headphones",
                        Settings: 'cog',
                    };
                    return(
                        <FontAwesome5Icons  
                        name={icons[route.name]} 
                        color={focused? COLORS.accent : COLORS.black}
                        style={{
                            fontSize: 26,
                            opacity: focused ? 1 : 0.5,
                        }}
                        />
                    );
                },
                tabBarLabel: ({focused}) =>{
                    const labels = {
                        Schedule: 'Hoje',
                        AllExercises: "Exercicios",
                        Settings: 'Configurações',
                    };

                    return(
                        <Text
                            style={{
                                color: focused? COLORS.accent : COLORS.black,
                                marginBottom: 8,
                                opacity: focused? 1: 0.6,
                                fontWeight: 'bold',
                            }}
                        >
                            {labels[route.name]}
                        </Text>
                    )
                }
            })}
        >
            <Tab.Screen name="Schedule" component={ScheduleScreen}/>
            <Tab.Screen name="AllExercises" component={StackNavigator}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;