import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import styles from "./style";

const Horario = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const times = [
    '08:00', '08:30', '09:00', '09:30',
    '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30'
  ];

  const openTimeSelector = () => {
    setIsModalVisible(true);
  };

  const selectTime = (time) => {
    setSelectedTime(time);
    onTimeSelect(time);
    setIsModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={openTimeSelector}
      >
        <Text style={styles.buttonText}>Selecionar Horário</Text>
      </TouchableOpacity>
      
      
      
      <Text style={styles.selectedText}>Horário Selecionado: {selectedTime || 'Nenhum horário selecionado'}</Text>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione um Horário</Text>
            <FlatList
              data={times}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.timeOption}
                  onPress={() => selectTime(item)}
                >
                  <Text style={styles.timeText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Horario;
