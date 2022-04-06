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
import {agreed} from '../assets';
import {unchecked} from '../assets';

export default function Register({navigation}) {
  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);
  const [image, setImage] = useState(false);
  const [image1, setImage1] = useState(false);
  const [check, setCheck] = useState(true);
  const [isCheck, setIsCheck] = useState(false);
  const [register, setRegister] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [passValidError, setPassValidError] = useState('');

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError(' ');
    }
  };

  const checkPass = () => {
    return password === confirmPassword && password.length != 0;
  };
  change = () => {
    setHidePass(!hidePass);
    setImage(!image);
  };
  change1 = () => {
    setHideConfPass(!hideConfPass);
    setImage1(!image1);
  };

  onPressCheck = () => {
    setCheck(!check);
    setIsCheck(!isCheck);
    setRegister(!register);
  };

  const img = image ? hide : eye;
  const img1 = image1 ? hide : eye;
  const checkbox = isCheck ? agreed : unchecked;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.subcontainer}>
        <Image
          source={require('../assets/icLoginBg_2022-03-24/icLoginBg.png')}
          style={styles.loginBg}
        />
        <View>
          <View style={styles.header}>
            <Text style={styles.heading}>{'Register'}</Text>
            <Text style={styles.subHeading}>
              {'Enter your details to continue'}
            </Text>
          </View>
          <View>
            <View style={styles.name}>
              <Text style={styles.nameHead}>{'Name'}</Text>
              <TextInput
                style={styles.nameInput}
                value={name}
                placeholder="Name"
                autoCorrect={false}
                onChangeText={value => {
                  setName(value);
                }}
              />
            </View>

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
                value={password}
                secureTextEntry={hidePass ? true : false}
                onChangeText={value => {
                  setPassword(value);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.visible}
                onPress={change}>
                <Image style={styles.toggle} source={img} />
              </TouchableOpacity>
            </View>

            {/* CONFIRM PASS */}
            <View style={styles.confirmPass}>
              <Text style={styles.confirmHead}>{'Confirm Password'}</Text>
              <TextInput
                style={styles.confirmPassInput}
                placeholder="Confirm Password"
                value={confirmPassword}
                secureTextEntry={hideConfPass ? true : false}
                onChangeText={value => {
                  setConfirmPassword(value);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.visible}
                onPress={change1}>
                <Image style={styles.toggle} source={img1} />
              </TouchableOpacity>
            </View>
            <Text style={styles.alert}>{passValidError}</Text>

            <View style={styles.viewTerms}>
              <TouchableOpacity onPress={onPressCheck} style={styles.check}>
                <Image style={styles.logo} source={checkbox} />
              </TouchableOpacity>

              <Text style={styles.terms}>
                {'Agree to Terms of Service & Privacy Policy'}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              disabled={register}
              activeOpacity={0.3}
              onPress={() => {
                checkPass()
                  ? setPassValidError(' ')
                  : setPassValidError('Password must match');
              }}>
              <Text style={styles.buttonText}>{'REGISTER'}</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footertxt}>
                {'Already have an account? '}
              </Text>
              <Pressable
                onPress={() => navigation.navigate('login')}
                style={({pressed}) => [
                  {
                    borderBottomColor: pressed ? '#000000' : '#00000000',
                  },
                  styles.press,
                ]}>
                {({pressed}) => (
                  <Text style={styles.nav}>{pressed ? 'Login' : 'Login'}</Text>
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
    // height: '100%',
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
    marginTop: '25%',
    padding: '6%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Arial Hebrew',
    marginBottom: '3%',
    color: '#000000',
  },
  subHeading: {
    color: '#aaaaaa',
  },
  name: {
    borderWidth: 1,
    marginTop: '4%',
    marginHorizontal: '5%',
    height: '10%',
    padding: '2%',
    paddingHorizontal: '4%',
    borderRadius: 4,
    borderColor: '#dddddd',
  },
  nameHead: {
    fontSize: 12,
    marginBottom: '1%',
    color: '#555',
  },
  nameInput: {
    width: '100%',
    paddingTop: '1%',
  },
  mail: {
    borderWidth: 1,
    marginTop: '4%',
    marginHorizontal: '5%',
    height: '10%',
    padding: '2%',
    paddingHorizontal: '4%',
    borderRadius: 4,
    borderColor: '#dddddd',
  },
  mailHead: {
    fontSize: 12,
    marginBottom: '1%',
    color: '#555',
  },
  emailInput: {
    width: '100%',
    paddingTop: '1%',
  },
  alert: {
    paddingLeft: '6%',
    color: '#ff0000',
    fontWeight: '600',
  },
  pass: {
    borderWidth: 1,
    marginTop: '1%',
    marginHorizontal: '5%',
    height: '11%',
    padding: '2%',
    paddingHorizontal: '4%',
    borderRadius: 4,
    borderColor: '#dddddd',
  },
  textHead: {
    fontSize: 12,
    marginBottom: '1%',
    color: '#555',
  },
  confirmPassInput: {
    // borderWidth:1,
    paddingTop: '2%',
    width: '92%',
  },
  confirmPass: {
    borderWidth: 1,
    marginTop: '4%',
    marginHorizontal: '5%',
    height: '12%',
    padding: '2%',
    paddingHorizontal: '4%',
    borderRadius: 4,
    borderColor: '#dddddd',
  },
  confirmHead: {
    fontSize: 12,
    marginBottom: '1%',
    color: '#555',
  },
  passInput: {
    // borderWidth:1,
    paddingTop: '2%',
    width: '92%',
  },
  visible: {
    position: 'absolute',
    right: '3%',
    top: '50%',
  },
  terms: {
    alignSelf: 'center',
    textAlign: 'center',
    // marginLeft: '1%',
    marginTop: '3%',
    color: '#444444',
  },
  button: {
    marginVertical: '5%',
    marginHorizontal: '6%',
    alignItems: 'center',
    paddingVertical: '4%',
    backgroundColor: '#fee7a4',
    borderRadius: 3,
  },
  buttonText: {
    fontWeight: '700',
    color: '#000000',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: '5%',
  },
  footertxt: {
    color: '#000000',
    textAlign: 'center',
    justifyContent: 'center',
  },
  toggle: {
    height: 20,
    width: 20,
  },
  logo: {
    height: 15,
    width: 15,
  },
  nav: {
    fontWeight: '700',
    color: '#000000',
  },
  press: {
    borderBottomWidth: 2,
    paddingBottom: 0,
    paddingTop: '0.5%',
  },
  viewTerms: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  check: {
    position: 'absolute',
    left: '10%',
    top: '50%',
  },
});
