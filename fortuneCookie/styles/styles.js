import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerContainer: {
    fontSize: 50,
    height: 150,
    color: 'orange',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: {width: -2, height: 5},
    textShadowRadius: 10,
  },
  cookieContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cookieImage: {
    width: 500,
    height: 300,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default styles;