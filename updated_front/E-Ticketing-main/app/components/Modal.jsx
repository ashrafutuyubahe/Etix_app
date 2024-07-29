import React from 'react';
import { Modal, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const Modal1 = ({ visible, onClose, children }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackdrop}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContainer}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    
    minWidth: 300,
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width * 0.87,
    height: Dimensions.get('screen').height * 0.7,
    borderRadius: 10,
    
    overflow: 'hidden',
  },
  
});

export default Modal1;