import { useState } from 'react';
import { View } from 'react-native';

import { Header } from './components';
import { Game, StartGame } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const headerTitle = userNumber ? 'Game' : 'Welcome';

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const Content = () => (userNumber ? <Game /> : <StartGame onStartGame={onStartGame} />);
  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}
