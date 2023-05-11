import { Button, Image, Text, View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/index';
import { ORIENTATION, theme } from '../../constants';
import useOrientation from '../../hooks/useOrientation';

const GameOver = ({ rounds, userNumber, onRestart }) => {
  const orientation = useOrientation();

  return (
    <View style={styles.container}>
      <Card style={orientation === ORIENTATION.portrait ? styles.content : styles.contentLandscape}>
        <Image
          style={orientation === ORIENTATION.portrait ? styles.image : styles.imageLandscape}
          source={{
            uri: 'https://media.istockphoto.com/id/1325433246/es/v%C3%ADdeo/animaci%C3%B3n-de-texto-game-over-con-el-canal-alfa-4k.jpg?s=640x640&k=20&c=_y_e72xtakNzsruRIjjBljRYRojcU3K3DDufC12Qt7w=',
          }}
          resizeMode="cover"
        />
        <View
          style={
            orientation === ORIENTATION.portrait
              ? styles.detailsContainer
              : styles.detailsContainerLandscape
          }>
          <Text style={styles.rounds}>Rounds : {rounds}</Text>
          <Text style={styles.selectedNumber}>Selected Number : {userNumber}</Text>
          <View style={styles.buttonContainer}>
            <Button color={theme.colors.primary} title="Restart" onPress={onRestart} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameOver;
