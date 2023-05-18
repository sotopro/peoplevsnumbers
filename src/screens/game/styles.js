import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  content: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  contentLandscape: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
});
