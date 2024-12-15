import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Text>Meu perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  perfil: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
});
