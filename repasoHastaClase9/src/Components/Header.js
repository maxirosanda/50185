import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,        // Margen superior de 20 unidades
    height: 80,           // Altura del contenedor
    backgroundColor: 'red',  // Color de fondo rojo
    justifyContent: 'center', // Alinea el texto verticalmente al centro
    alignItems: 'center',     // Alinea el texto horizontalmente al centro
  },
});