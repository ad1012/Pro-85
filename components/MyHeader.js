import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet} from 'react-native';
import db from '../config'
import firebase from 'firebase';

const MyHeader = props => { 
  return ( 
  <Header centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } 
}} 
backgroundColor = "#eaf8fe" /> 
  ); 
}; 

export default MyHeader;
