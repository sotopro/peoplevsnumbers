import React, { useState } from 'react';
import { Button, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';
import { Card, Header } from '../../components/index';
import { theme } from '../../constants';

const StartGame = () => {
  const [numberOption, setNumberOption] = useState('');

  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, ''));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Welcome" />
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Write a number</Text>
          <TextInput
            placeholder="0"
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            onChangeText={onHandlerChangeText}
            value={numberOption}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={() => {}} color={theme.colors.secondary} />
            <Button title="Confirm" onPress={() => {}} color={theme.colors.primary} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
