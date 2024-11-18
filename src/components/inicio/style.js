import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
viewImagem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    backgroundColor: '#2D2D2D'
    },

image: {
    marginTop:150,
    width: 250, 
    height: 250,
    },

roundImage: {
    borderRadius: 250, 
    },

textTitle:{
    padding: 50,
    alignItems:"center",
    justifyContent:"center",
    color:"#ffffff",
    fontSize:40,
    fontWeight:"bold",
},

buttonCadastrar:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"55%",
    backgroundColor:"#1C1C1C",
    width: 300,
    height: 50
},

textButtonCadastrar:{
    fontSize: 20,
    color: "#ffffff",
},

buttonEntrar:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"55%",
    backgroundColor:"#363636",
    width: 300,
    height: 50,
    marginTop: 10
},

textButtonEntrar:{
    fontSize: 20,
    color: "#FFFAF0",
},
});

export default styles