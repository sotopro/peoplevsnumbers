import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { styles } from './styles';
import { Card, Header, NumberContainer } from '../../components/index';
import { theme } from '../../constants';
import useOrientation from '../../hooks/useOrientation';

const isAndroid = Platform.OS === 'android';

const StartGame = ({ onStartGame }) => {
  const [numberOption, setNumberOption] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const { isPortrait } = useOrientation();

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
      <Card style={isPortrait ? styles.confirmedContainer : styles.confirmedContainerLandscape}>
        <Text style={styles.confirmedTitle}>Selected Number</Text>
        <NumberContainer number={selectedNumber} />
        <Button title="Start Game" onPress={onHandlerStartGame} color={theme.colors.primary} />
      </Card>
    ) : null;

  return (
    <KeyboardAvoidingView
      behavior={isAndroid ? 'padding' : 'height'}
      style={styles.containerKeyboardAvoidingView}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Start Game</Text>
            <Card style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;
