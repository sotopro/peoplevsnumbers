import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
  },
  contentLandscape: {
    height: 210,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  imageLandscape: {
    width: '50%',
    height: 190,
  },
  rounds: {
    paddingVertical: 10,
    fontSize: 16,
  },
  selectedNumber: {
    paddingVertical: 5,
    fontSize: 16,
  },
  buttonContainer: {
    paddingVertical: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  detailsContainerLandscape: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
