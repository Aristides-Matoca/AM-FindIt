import React from "react";
import { View, StyleSheet, StatusBar, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Header() {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.search}>
                        <TextInput
                            placeholder='Procurar por um artigo...'
                            placeholderTextColor={'black'}
                            style={styles.pesquisa}>
                        </TextInput>

                        <TouchableOpacity>
                            <AntDesign name="search1" size={25} color="black" style={{top: -31, left: 262}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        //paddingBottom: statusBar,
        paddingTop: 10,
        paddingRight: -10,
        height: 112,
    },

    content:{
        bottom:10
    },

    search:{
        width: 310,
        height: 45,
        backgroundColor: '#F6F2F2',
        left: 35,
        top: 55,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#DABC1F'
    },

    pesquisa:{
        width: 225,
        height: 38,
        backgroundColor: 'transparent',
        justifyContent:"center",
        alignItems: 'center',
        left: 20,  
    },
})