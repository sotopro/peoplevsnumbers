import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import { styles } from './styles';
import { Card, NumberContainer } from '../../components/index';
import { theme, ORIENTATION } from '../../constants';
import useOrientation from '../../hooks/useOrientation';

const StartGame = ({ onStartGame }) => {
  const [numberOption, setNumberOption] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const orientation = useOrientation();

  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, ''));
  };

  const onHandlerConfirm = () => {
    const chosenNumber = Number(numberOption);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: () => setNumberOption('') },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setNumberOption('');
    }
  };

  const onHandlerReset = () => {
    setNumberOption('');
    setConfirmed(false);
    setSelectedNumber(null);
  };

  const onHandlerStartGame = () => {
    onStartGame(selectedNumber);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card
        style={
          orientation === ORIENTATION.portrait
            ? styles.confirmedContainer
            : styles.confirmedContainerLandscape
        }>
        <Text style={styles.confirmedTitle}>Selected Number</Text>
        <NumberContainer number={selectedNumber} />
        <Button title="Start Game" onPress={onHandlerStartGame} color={theme.colors.primary} />
      </Card>
    ) : null;

  return (
    <KeyboardAvoidingView behavior="height" style={styles.containerKeyboardAvoidingView}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.containerScroll}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Text style={styles.title}>Start Game</Text>
            <Card
              style={
                orientation === ORIENTATION.portrait
                  ? styles.inputContainer
                  : styles.inputContainerLandscape
              }>
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
                <Button title="Reset" onPress={onHandlerReset} color={theme.colors.secondary} />
                <Button
                  title="Confirm"
                  onPress={onHandlerConfirm}
                  color={theme.colors.primary}
                  disabled={numberOption === ''}
                />
              </View>
            </Card>
            <Confirmed />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default StartGame;
