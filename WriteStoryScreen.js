import React from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';

export default class WriteStoryScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        name: '',
        buttonState: 'normal',
        story: ''
      }
    }
    initiateStorySubmit = async ()=>{
        db.collection("Write").add({
          'Name' : this.state.name,
          'storyWritten' : this.state.story,
          'date'   : firebase.firestore.Timestamp.now().toDate(),
          'transactionType' : "Submit"
        })
    
        this.setState({
          story : '',
        })
      }
    
      handleTransaction = async()=>{
        var transactionMessage = null;
        db.collection("stories").doc(this.state.story).get()
        .then((doc)=>{
          var book = doc.data()
          if(stories.story){
            this.initiateStorySubmit();
            transactionMessage = "Story Submitted"
          }
        })
    
        this.setState({
          transactionMessage : transactionMessage
        })
      }

    render() {
      const nameState = this.state.name;
      const story = this.state.storyWritten;
      const buttonState = this.state.buttonState;

     if (buttonState === "normal"){
        return(
          <View style={styles.container}>
         <KeyboardAvoidingView style={styles.container} behaviour="padding" enabled>
        <Text style={{textAlign:'center', fontSize:30, marginTop: 1}}>Story Hub</Text>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Name"
              value={this.state.nameState}/>
            </View>

            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox2}
              placeholder="Write your story here"
              value={this.state.storyWritten}/>
            </View>

            <TouchableOpacity
          style={styles.submitButton}
          onPress={()=>{
            alert('Your story has been submitted!')
          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
          </View>
        );
      }
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 300,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20
    },
    inputBox2:{
        width: 300,
        height: 200,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20
      },
    submitButton:{
        backgroundColor: '#FBC02D',
        width: 100,
        height:50
      },
      submitButtonText:{
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight:"bold",
        color: 'white'
      },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });