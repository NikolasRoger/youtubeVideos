import React from 'react'
import { View, Text } from 'react-native'

import SlideIn from './animations/SlideIn'

const Animations = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <SlideIn>
        <Text style={{ fontSize: 30 }}>Texto animado</Text>
      </SlideIn>
    </View>
  )
}

export default Animations