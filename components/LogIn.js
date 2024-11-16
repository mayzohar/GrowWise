import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

function LogIn(props) {
    const [Email, onChangeText] = React.useState('');
    const [Password, onChangePassword] = React.useState('');
  
    console.log('LogIn Screen Rendered');

    const handleLogin = () => {
        props.navigation.navigate('Home');
    };
  

    return (
        <SafeAreaView style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>GrowWise</Text>

            {/* Email and Password input fields */}
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText} 
                value={Email}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput 
                style={styles.input}
                onChangeText={onChangePassword} 
                value={Password}
                placeholder="Password"
                secureTextEntry={true}
            />

            {/* LogIn Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Register Button */}
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerText}>Don't have an account? Register</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
            </SafeAreaView>
        );
        }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30,
    },
    input: {
        height: 45,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    registerButton: {
        marginTop: 20,
    },
    registerText: {
        color: '#007BFF',
        fontSize: 16,
    },
    });

export default LogIn;