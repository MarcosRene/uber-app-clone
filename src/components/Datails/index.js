import React, { Component } from 'react';

import { View } from 'react-native';
import { 
    Container, 
    TypeTitle, 
    TypeDescription, 
    TypImage, 
    RequestButton,
    RequestButtonText
} from './styles';

import uberx from '../../assets/uberx.png';

export default class Datails extends Component {
  render() {
    return <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

        <TypImage source={uberx}/>
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>R$6,00</TypeDescription>
        <RequestButton onPress={() => {}}>
            <RequestButtonText>Solicitar Uberx</RequestButtonText>
        </RequestButton>
    </Container>;
  }
}
