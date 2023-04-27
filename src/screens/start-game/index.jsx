import { Text, View } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/index';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
    </View>
  );
};

export default StartGame;
