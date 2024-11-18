import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity} from "react-native"
import Calendario from "./calendario";
import Horario from "./horario";
import styles from './style';
export default function Agendamento(){

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    

    return(
        <View style={styles.container}>
            <Calendario onDateSelect={setSelectedDate} />
            <Horario onTimeSelect={setSelectedTime} />
            <Text>Horário selecionado :{selectedTime}  {selectedDate} </Text>
            
        </View>
    );
}