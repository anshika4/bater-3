import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet,Image,Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import  db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends Component{
  constructor(){
    super()
    this.state={
    discription:'',
    itemName:'',
    userName:firebase.auth().currentUser.email,
    }
  }

addItem = (itemName,discription) =>{
  var userName= this.state.userName
db.collection('exchange').add({
"item_name"   : itemName,
"description" : discription,
"username":userName,
})
this.setState({
  itemName : '',
  discription :''
})
return  Alert.alert(
'item ready to change',
'',
[
{text: 'OK', onPress: () => this.props.navigation.navigate('HomeScreen')},
]
);
}



l
render(){
return(
<View style={{justifyContent: 'center',alignItems: 'center'}}>
<KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
<TextInput
style={styles.TextInput}
placeholder ={"addItem"}
onChangeText={(text)=>{
this.setState({
itemName: text
})
}}
value={this.state.itemName}
/>
<TextInput
style={styles.TextInput}
placeholder ={"Discription"}
numberOfLines={4}
onChangeText={(text)=>{
this.setState({
discription: text
})
}}
value={this.state.Discription}
/>
</KeyboardAvoidingView>
<TouchableOpacity
style={styles.signButton}
onPress={()=>{this.addItem(this.state.itemName, this.state.discription)}}>
<Text style={styles.signup}>addItem</Text>
</TouchableOpacity>
</View>
)
}
}

const styles = StyleSheet.create({
register:{
textAlign:'center',
justifyContent:'center',
alignItems:'center',
fontWeight:'bold',
color:'red',
backgroundColor:'white',
fontSize:10
},
 title :{
   fontSize:50,
   fontWeight:'100',
   paddingBottom:30,
   color : '#ff3d00'
 },
 TextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 signButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:2,
   marginTop:30,
   marginLeft:70,
  backgroundColor:'white'
 },
 signup:{
   color:'red',
   fontSize:15,
   fontWeight:'bold'
 },
image:{
width: 150,
height: 130,
marginTop: 20,
marginLeft: 100,
},
KeyboardAvoidingView:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
modalTitle :{
justifyContent:'center',
alignSelf:'center',
fontSize:30,
color:'#ff5722',
margin:50
},
modalContainor:{
flex:1,
borderRadius:20,
justifyContent:'center',
alignItems:'center',
backgroundColor:"#ffff",
marginRight:30,
marginLeft : 30,
marginTop:80,
marginBottom:80,
},
regesterButton:{
width:200,
height:40,
alignItems:'center',
justifyContent:'center',
borderWidth:1,
borderRadius:10,
marginTop:30
},
})