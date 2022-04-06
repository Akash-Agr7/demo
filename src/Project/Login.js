import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {eye} from '../assets';
import {hide} from '../assets';

export default function Login({navigation}) {
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(false);
  const [emailValidError, setEmailValidError] = useState('');

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError('Email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('Enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError(' ');
    }
  };
  change = () => {
    setHidePass(!hidePass);
    setImage(!image);
  };

  const img = image ? eye : hide;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} style={styles.subcontainer}>
        <Image
          source={require('../assets/icLoginBg_2022-03-24/icLoginBg.png')}
          style={styles.loginBg}
        />
        <View>
          <View style={styles.header}>
            <Text style={styles.heading}>{'Login'}</Text>
            <Text style={styles.subHeading}>
              {'Enter your details to continue'}
            </Text>
          </View>
          <View>
            <View style={styles.mail}>
              <Text style={styles.mailHead}>{'Email'}</Text>
              <TextInput
                style={styles.emailInput}
                value={email}
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={value => {
                  setEmail(value);
                  handleValidEmail(value);
                }}
              />
            </View>

            <Text style={styles.alert}>
              {emailValidError ? emailValidError : null}
            </Text>

            <View style={styles.pass}>
              <Text style={styles.textHead}>{'Password'}</Text>
              <TextInput
                style={styles.passInput}
                placeholder="Password"
                secureTextEntry={hidePass ? true : false}
              />
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.visible}
                onPress={change}>
                <Image style={styles.toggle} source={img} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.forgot}>{'Forgot Password?'}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                // onPress={() => handleValidEmail({ email })}
              >
                <Text style={styles.buttonText}>{'LOGIN'}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text>{'Not Registered Yet? '}</Text>
              <Pressable
                onPress={() => navigation.navigate('Register')}
                style={({pressed}) => [
                  {
                    borderBottomColor: pressed ? '#000000' : '#ffffff00',
                  },
                  styles.press,
                ]}>
                {({pressed}) => (
                  <Text style={styles.nav}>
                    {pressed ? 'Register' : 'Register'}
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  loginBg: {
    position: 'absolute',
    top: '0%',
    width: '104%',
    resizeMode: 'contain',
  },
  header: {
    marginTop: '30%',
    padding: '6%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Arial Hebrew',
    marginBottom: '3%',
  },
  subHeading: {
    color: '#aaaaaa',
  },
  emailInput: {
    width: '100%',
    paddingVertical: '2%',
    borderRadius: 4,
    borderColor: '#dddddd',
  },
  alert: {
    paddingLeft: '6%',
    color: '#ff0000',
    fontWeight: '600',
  },
  mail: {
    borderWidth: 1,
    marginTop: '4%',
    marginHorizontal: '5%',
    height: '14%',
    padding: '2%',
    paddingHorizontal: '4%',
    borderRadius: 4,
    borderColor: '#dddddd',
  },
  mailHead: {
    fontSize: 10,
    marginBottom: '2%',
    color: '#555',
  },
  textHead: {
    fontSize: 10,
    marginBottom: '2%',
    color: '#555',
  },
  pass: {
    borderWidth: 1,
    marginTop: '4%',
    marginHorizontal: '5%',
    height: '14%',
    padding: '2%',
    paddingHorizontal: '4%',
    borderRadius: 4,
    borderColor: '#dddddd',
  },
  passInput: {
    // borderWidth:1,
    paddingVertical: '3%',
    paddingTop: '2%',
    width: '92%',
  },
  visible: {
    position: 'absolute',
    right: '3%',
    top: '50%',
  },
  forgot: {
    textAlign: 'right',
    marginRight: '6%',
    marginTop: '8%',
    color: '#444444',
  },
  button: {
    marginVertical: '10%',
    marginHorizontal: '6%',
    alignItems: 'center',
    paddingVertical: '4%',
    backgroundColor: '#fee7a4',
    borderRadius: 3,
  },
  buttonText: {
    fontWeight: '700',
  },
  footer: {
    // borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '5%',
  },
  toggle: {
    height: 20,
    width: 20,
  },
  nav: {
    fontWeight: '700',
  },
  press: {
    borderBottomWidth: 2,
    paddingBottom: 0,
  },
});
