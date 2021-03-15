import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet,Image,Modal,ScrollView,KeyboardAvoidingView,FlatList} from 'react-native';
import  db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends Component{
constructor(){
super()
this.state={
  allRequests:[]
}
this.requestRef=null
}

allRequests = () =>{
this.requestRef = db.collection("requests")

.onSnapshot((snapshot)=>{
  var requestedList = snapshot.docs.map(document => document.data());
  
  this.setState({
    allRequests : requestedList
  });

})
}

componentDidMount(){
  this.allRequests()
}

renderItem=({item,i})=>{
return(
<ListItem
key={i}
title={item.item}
subtitle={item.discription}
titleStyle={{color:'black',fontWeight:'bold'}}
rightElement={
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Excahnge</Text>
</TouchableOpacity>
}
/>
)
}

keyExtractor=(item,index)=>index.toString()

render(){
return(
<View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
<Text style={styles.title}>  List Of Items </Text>
{
this.state.requests.length === 0
?(
<Text style={{ fontSize: 20}}>List Of All Requested Items.</Text>
)
:(
<View>
<FlatList
keyExtractor={this.keyExtractor}
data={this.state.allRequests}
renderItem={this.renderItem}
/>
</View>
)
}
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
button:{
width:200,
height:40,
alignItems:'center',
justifyContent:'center',
borderWidth:1,
borderRadius:10,
marginTop:30,
marginLeft:70,
backgroundColor:'red',
},
buttonText:{
color:'white',
fontSize:15,
fontWeight:'bold',
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
},
})