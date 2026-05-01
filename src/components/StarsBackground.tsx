import React, { useEffect, useRef } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const Star = () => {
  const fall = useRef(new Animated.Value(0)).current;
  const left = Math.random() * width;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fall, {
        toValue: height,
        duration: 3000 + Math.random() * 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.star,
        {
          transform: [{ translateY: fall }],
          left,
        },
      ]}
    />
  );
};

const StarsBackground = () =>  {
  const stars = Array.from({ length: 40 });

  return (
    <View style={styles.container}>
      {stars.map((_, i) => (
        <Star key={i} />
      ))}
    </View>
  );
}
 export default StarsBackground;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  star: {
    position: 'absolute',
    top: -10,
    width: 2,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});