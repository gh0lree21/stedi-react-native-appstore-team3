import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>

    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
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

// button that will display "Hello Ryan" when pressed
export function HelloRyan(props){
    return(
        <View style={styles.login}>
            <Text>Hello Ryan</Text>
            <Button title="ryanButton" onPress={()=>console.log("Hello Ryan")}></Button>
        </View>
    );
}

export function HelloSamantha(props){
    return(
        <View style={styles.login}>
            <Text>Hello Samantha</Text>
            <Button title="SamanthaButton" onPress={()=>console.log("Hello Samantha")}></Button>
   </View>

    );
}
// make a button that will display "Hello Brian" when pressed
export function HelloBrian(props){
    return(
        <View style={styles.login}>
            <Text>Brian's Button</Text>
            <Button title="BrianButton" onPress= {console.log("Hello Brian")}></Button>

        </View>

    );
}