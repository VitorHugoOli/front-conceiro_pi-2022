import {Button, Pressable, StyleSheet, Text, TextInput, View, Image} from "react-native";
import React, {Component} from "react";
import Provider from "../utils/provider/provider"


export default class LoginPage extends Component {
    state = {
        username: '',
        password: '',
    };

    SingInOptions = [
        {
            title: 'Facebook',
            icon: 'https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png',
            handler: () => {
                console.log('Facebook');
            },
        },
        {
            title: 'Google',
            icon: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon-2.png',
            handler: () => {
                console.log('Google');
            },
        },
        {
            title: 'Apple',
            icon: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png',
            handler: () => {
                console.log('Apple');
            },
        },
    ];

    render() {
        return <View style={styles.container}>
            <Text style={styles.title}>Olá!</Text>
            <Text style={styles.subtitle}>Seja muito bem vindo!</Text>

            <TextInput style={styles.input} onChangeText={text => this.state.username = text}
                       placeholder="Entre com seu username" placeholderTextColor='#A19FA9'/>
            <TextInput style={styles.input} onChangeText={text => this.state.password = text}
                       placeholder="Entre com seu password"
                       secureTextEntry={true}
                       placeholderTextColor='#A19FA9'/>

            <View style={{flexDirection: 'row'}}>
                <Text style={styles.passRecover}>Recuperar Senha</Text>
            </View>

            <Pressable style={styles.button} onPress={() => {
                Provider.post('/login/auth', {
                    username: this.state.username,
                    password: this.state.password,
                }).then(response => {
                    alert(`Sucesso! ${JSON.stringify(response.data)}`)
                }).catch(error => {
                    alert(error);
                });
            }}>
                <Text style={styles.textButton}>Entrar</Text>
            </Pressable>

            <View style={styles.row}>
                <View style={{...styles.line, ...styles.lineE}}/>
                <Text style={{fontFamily: 'Poppins_400Regular'}}> Ou Continue Com </Text>
                <View style={{...styles.line, ...styles.lineR}}/>
            </View>

            <View style={styles.rowLogo}>
                {this.SingInOptions.map((option, index) => (
                    <Pressable style={styles.buttonLogo} onPress={() => {
                    }}>
                        <Image
                            style={{width: 30, height: 30, resizeMode: 'contain'}}
                            source={{uri: option.icon}}
                        />
                    </Pressable>
                ))}

            </View>

            <Text style={styles.register}>Ainda não é membro? <Text style={styles.registerClick}>Registre
                agora</Text></Text>
        </View>;
    }


}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#FC6B68',
        width: '100%',
        marginBottom: 25,
    },
    buttonLogo: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 3,
        elevation: 3,
        backgroundColor: '#F3EEF2',

    },
    rowLogo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    passRecover: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#A19FA9',
        marginTop: 8,
        marginBottom: 40,
        flex: 1,
        textAlign: 'right'
    },
    textButton: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        color: 'white',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins_400Regular',
        marginBottom: 40,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        width: '30%'
    },
    lineR: {
        marginLeft: 10,
    },
    lineE: {
        marginRight: 10,
    },
    input: {
        borderBottomColor: '#000',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 15,
        paddingTop: 15,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#fff',
        fontFamily: 'Poppins_600SemiBold',
    },
    register: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 100,
    },
    registerClick: {
        color: '#3b5998',
    },
    container: {
        flex: 1,
        backgroundColor: '#F3EEF2',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 30,
        paddingLeft: 30,
    },
});
