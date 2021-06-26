import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Modal, KeyboardAvoidingView} from 'react-native'
import MyHeader from '../components/MyHeader'
import db from '../config';
import firebase from 'firebase';


export default class ExchangeScreen extends Component{
    constructor(){
        super();
        this.state = {
            username: firebase.auth().currentUser.email,
            itemName:'',
            description: '',
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7);
      }

    addItem = (itemName,description)=>{
        var userName = this.state.userName
        db.collection("exchange_requests").add({
            "username":userName,
            "item_name":itemName,
            "description":description
        })
        this.setState({
            itemName:'', 
            description:'',
        })
        this.setState({
            itemName:'', 
            description:'',
        })
        return Alert.alert('Item Uploaded','', [
            {text:"Ok", onPress:()=>{
                this.props.navigation.navigate('HomeScreen')
            }}
        ])
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <myHeader title = "Add Item"/>
                <KeyboardAvoidingView style = {{flex:1,justifyContent:'center', alignItems:'center'}}>
                    <TextInput style = {styles.TextInput}
                    placeholder = {"Item Name"}
                    maxLength = {15}
                    onChangeText ={(text)=>{
                        this.setState({
                           itemName:text 
                        })
                    }}
                    value = {this.state.itemName}
                    />
                    <TextInput 
                    multiline = {5}
                    style = {[styles.formTextInput,{height:150}]}
                    placeholder = {"Description of Item"}
                    
                    onChangeText ={(text)=>{
                        this.setState({
                           description:text 
                        })
                    }}
                    value = {this.state.description}
                    />
                    <TouchableOpacity style = {[styles.button,{marginTop:15}]}
                    onPress ={()=>{
                        this.addItem(this.state.itemName,this.state.description)
                    }}> 
                    
                    <Text style = {{color:'blue',fontSize: 20, fontWeight:'bold'}}> Add Item </Text>

                </TouchableOpacity>
                </KeyboardAvoidingView>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    formTextInput:{
        width:"30%",
        height: 25,
        alignSelf:'center',
        borderColor:"black",
        borderRadius:5,
        borderWidth:2,
        marginTop:10,
    },
    button:{
        width:"30%",
        height: 25,
        alignSelf:'center',
        borderColor:"#ff0076",
        borderRadius:5,
        borderWidth:2,
        marginTop:10,
    }
})
