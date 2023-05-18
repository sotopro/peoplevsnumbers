import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  containerKeyboardAvoidingView: {
    flex: 1,
  },
  containerScroll: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: 'Inter-Regular',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 200,
  },
  inputContainerLandscape: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 180,
  },
  label: {
    fontSize: 14,
    color: theme.colors.text,
    paddingVertical: 5,
    textAlign: 'center',
  },
  input: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  confirmedContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  confirmedContainerLandscape: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  confirmedTitle: {
    fontSize: 16,
  },
});
