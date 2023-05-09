import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { Game, GameOver, StartGame } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const headerTitle = userNumber ? 'Game' : 'Welcome';

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const Content = () => {
    if (userNumber && guessRounds <= 0) {
      return <Game userNumber={userNumber} onGameOver={onGameOver} />;
    }

    if (guessRounds > 0) {
      return <GameOver />;
    }

    return <StartGame onStartGame={onStartGame} />;
  };
  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}
