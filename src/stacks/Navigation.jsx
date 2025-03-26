import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabStack from './TabStack'

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabStack/>
    </NavigationContainer>
  )
}

export default Navigation