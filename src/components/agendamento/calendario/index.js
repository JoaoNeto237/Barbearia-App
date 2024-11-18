import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import * as CalendarAPI from 'expo-calendar';
import styles from "./style";

LocaleConfig.locales['pt-BR'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-BR';

const CalendarExample = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const onDayPress = async (day) => {
    if (day.dateString < today) {
      Alert.alert('Você não pode selecionar uma data anterior à de hoje.');
      return;
    }

    setSelectedDate(day.dateString);
    onDateSelect(day.dateString);

    const { status } = await CalendarAPI.requestCalendarPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada para acessar o calendário.');
      return;
    }
  };

  const openTimeSelector = () => {
    if (!selectedDate) {
      Alert.alert('Por favor, selecione uma data primeiro.');
      return;
    }
  };

  const markedDates = {};
  for (let d = new Date(); d >= new Date(today); d.setDate(d.getDate() - 1)) {
    const dateString = d.toISOString().split('T')[0];
    markedDates[dateString] = { disabled: true, dotColor: '#555555', color: '#333333' };
  }

  const selectTime = (time) => {
    setIsModalVisible(false);
  };

  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.text1}>Selecionar Data e Horário</Text>
      <Text>Data Selecionada: {selectedDate || 'Nenhuma data selecionada'}</Text>
      
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' }
        }}
        minDate={today}
        theme={{
          backgroundColor: '#000000',
          calendarBackground: '#000000',
          textSectionTitleColor: '#ffffff',
          dayTextColor: '#ffffff',
          todayTextColor: '#ff6347',
          selectedDayBackgroundColor: '#ff6347',
          selectedDayTextColor: '#ffffff',
          monthTextColor: '#ffffff',
          arrowColor: '#ff6347',
          textDisabledColor: '#999999',
          dotColor: '#ff6347',
          selectedDotColor: '#ffffff',
          todayBackgroundColor: '#444444',
          textDayFontFamily: 'Roboto',
          textMonthFontFamily: 'Roboto',
          textDayHeaderFontFamily: 'Roboto',
        }}
      />
    </View>
  );
};

export default CalendarExample;
