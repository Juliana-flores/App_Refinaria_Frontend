import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Home({navigation}) {

    return (
        <View>
            <Text>Esse é o componente Home</Text>
            <Button
                    title='Ir para Login'
                    onPress={() => navigation.navigate('Login'
                )}
            />
        </View>
    );
}