import React from 'react'
import { Animated, Easing } from 'react-native'

export default class SlideIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            animatedValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            easing: Easing.inOut(Easing.ease),
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    render() {
        return (
            <Animated.View
                style={{
                    transform: [{
                        translateX: this.state.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-200, 0]
                        })
                    }],
                    opacity: this.state.animatedValue
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}