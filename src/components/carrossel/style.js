import { StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get('window');

export default StyleSheet.create({

    wrapper: {
      marginTop: 0,
      height: 300, // Ajuste a altura do carrossel conforme necessário
    },
    slide: {
      width: viewportWidth, // Usa a largura da tela
      justifyContent: 'center',
      alignItems: 'center',
    },
    image1: {
      marginRight:40,
      width: 300, // Defina a largura desejada
      height: 200, // Defina a altura desejada
      borderRadius: 20, // Torna a imagem redonda
      resizeMode: 'cover',
    },
});