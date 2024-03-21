import React from 'react';
import { View, StyleSheet} from 'react-native';
import Status from '../components/StatusBar';
import { ActivityIndicator } from 'react-native';

const Load = () => {
  return (
    <View style={styles.container}>
      <Status title={''} />
      <ActivityIndicator size={60} color="#ffff" style={styles.circle}  />

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
    marginTop: -60,  
  },
});

export default Load;
