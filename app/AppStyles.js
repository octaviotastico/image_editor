import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },

  bigView: {
    flex: 1,
    backgroundColor: 'rgba(47, 163, 218, .4)'
  },

  mainTitle: {
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 28,
    backgroundColor: 'rgba(255, 255, 255, .1)'
  },

  topView: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuView: {
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

});

  export default Styles;