import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D', // Definindo uma cor de fundo escura para o container
    paddingTop: 0,
    margin:0 // Adicionando padding no topo
  },

  viewImagem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50, // Adicionando espaçamento abaixo da imagem
  },

  image: {
    marginTop: 15,
    width: 250,
    height: 250,
    marginBottom: 30,
  },

  roundImage: {
    borderRadius: 250,
  },

  text: {
    marginLeft: 20,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Espaçamento entre o texto e o campo
  },

  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 50,
    margin: 12,
    paddingLeft: 10,
    fontSize: 16, // Ajuste do tamanho da fonte
    color: '#333', // Cor do texto
  },

  avoid: {
    padding: 10,
  },

  button: {
    borderRadius: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1C1C',
    paddingTop: 10,
    paddingBottom: 14,
    margin: 12,
  },

  button2: {
    borderRadius: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#707070',
    paddingTop: 10,
    paddingBottom: 14,
    margin: 12,
  },

  textButton: {
    fontSize: 20,
    color: '#FFFAF0',
  },

});

export default styles;
