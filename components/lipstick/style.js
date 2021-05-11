import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({

    imageContainer:{
        width:'100%',
        height: Dimensions.get('window').height,
      },
      brand:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
      },
      name:{
        fontSize:50,
        fontWeight:'bold',
    
      },
      description:{
        fontSize:20,
        backgroundColor:'white'
      },
      lipstick:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonsContainer:{
        position:'absolute',
        bottom:50,
        width:'100%',
      },
      button:{
        backgroundColor:'gray',
        height: 50,
        borderRadius:30,
        justifyContent: 'center',
        alignItems:'center',
        opacity: .8,
        marginHorizontal:8,
        

      }

});

export default styles;