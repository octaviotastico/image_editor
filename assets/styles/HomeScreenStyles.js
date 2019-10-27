import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
  // Background Image
  container: {
    width: '100%',
    height: '100%'
  },
  
  // Background view
  bigView: {
    backgroundColor: 'rgba(47, 163, 218, .4)',
    height: '100%',
    width: '100%'
  },

  // H O M E view
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%'
  },

  // H O M E
  mainTitle: {
    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderColor: '#ffffffff',
    paddingRight: 40,
    paddingLeft: 40,
    borderWidth: 2,
    color: '#ffffffff',
    fontSize: 28,
    padding: 20
  },

  // Camera and Galery buttons view
  menuView: {
    flexDirection: 'row'
  },

  // Camera and Galery buttons
  buttons: {
    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderColor: '#ffffffff',
    borderWidth: 2,
    padding: 10,
    height: 70,
    width: 70
  },

  // Camera and Galery images
  imageButtons: {
    tintColor: '#ffffffff',
    height: '100%',
    width: '100%'
  },

  // Camera and Galery text
  textButtons: {
    color: '#ffffffff',
    width: '100%'
  }
});