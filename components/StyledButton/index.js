import React from 'react';
import {View,Text, Pressable, Button, Alert} from 'react-native';
import style from './style';


const StyledButton = (props)=>{
    const type =props.type;
    
    const content = props.content;
    // const title = props.title;

    const onPress =props.OnPress;
    
    const backgroundColor = type ==='primary'?'black':'white';
    const textColor = type ==='primary'?'white':'black';
    
    return(
    <View style={style.container}>
      {/* <Pressable 
      style={[style.button,{backgroundColor:backgroundColor}]}
          
          OnPress={()=> onPress()} >

          <Text style={[style.text,{color:textColor}]}> {content}</Text>
        
          </Pressable>  */}

      <Button>
        style={[style.button,{backgroundColor:backgroundColor}]}
        OnPress={()=> onPress()} 
        <title style={[style.text,{color:textColor}]}>{content}</title>
      </Button>
       

    </View>
    );
};

export default StyledButton;