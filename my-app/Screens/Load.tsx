import React from 'react';
import { View, StyleSheet} from 'react-native';
import Status from '../components/StatusBar';
import { FontAwesome } from '@expo/vector-icons';

const Load = () => {
  return (
    <View style={styles.container}>
      <Status title={''} />
      <FontAwesome name="circle-o-notch" size={70} color="white" style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    marginTop: -40,  
    transform: [{ rotate: '60deg' }],  
  },
});

export default Load;
