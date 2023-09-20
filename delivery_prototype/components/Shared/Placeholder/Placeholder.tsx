import React from 'react';
import { View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { Easing, withRepeat, useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

interface ShimmeringSkeletonProps {
  width?: number;
  height?: number;
  borderRadius?: number;
}

const Placeholder: React.FC<ShimmeringSkeletonProps> = ({ width = 100, height = 100, borderRadius = 50 }) => {
  const shimmerAnimation = useSharedValue(0);

  React.useEffect(() => {
    shimmerAnimation.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle<ViewStyle>(() => {
    return {
      transform: [
        {
          translateX: withSpring(shimmerAnimation.value += 20),
        },
      ],
    };
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width, height, borderRadius, overflow: 'hidden' }}>
        <LinearGradient
          colors={['#E1E9EE', '#F2F8FC', '#E1E9EE']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{ flex: 1 }}
        >
          <Animated.View
            style={[
              {
                position: 'absolute',
                left: '-30%',
                top: 0,
                height: '100%',
                width: '30%',
                backgroundColor: 'white',
              },
              animatedStyle
            ]}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default Placeholder;
