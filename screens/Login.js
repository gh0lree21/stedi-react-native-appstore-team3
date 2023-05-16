import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>
            <Text>Hello Ryan</Text>
            <Button title="ryanButton" onPress={()=>console.log("Hello Ryan")}></Button>
            <Button title="Grant Button" onPress={()=>
                console.log("Hello there")}></Button>
            <Button title="Brian Button" onPress={()=>console.log("Hello Brian")}></Button>
            <Button title="Sam's Button" onPress={()=>console.log("Hello Sam")}></Button>
        </View>

    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})