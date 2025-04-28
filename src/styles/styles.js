import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },
  picker: {
    width: '80%',
    height: 50,
    marginBottom: 24,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});
