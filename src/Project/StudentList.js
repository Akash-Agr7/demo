import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

export default function StudentList() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [nameValidError, setNameValidError] = useState('');
  const [list, setList] = useState([]);
  const [object, setObject] = useState({});
  const [disabled1, setDisabled1] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const [forEdit, setForEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [button, setButton] = useState('Add Details');

  const flatlist = useRef();
  let reg1 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const handleValidName = () => {
    reg1.test(name) ? setDisabled1(false) : setDisabled1(true);
    return reg1.test(name);
  };

  const handleValidEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@[a-z]+mail*(\.\w+)+$/;
    reg.test(email) ? setDisabled2(false) : setDisabled2(true);
    return reg.test(email);
  };

  const addEntry = () => {
    let x = list.map(item => item.stemail === email);
    if (forEdit && !x.includes(true)) {
      let i = list.findIndex(id => id == object);
      list.splice(i, 1);
      setList([...list]);
      setObject({});
      setButton('Add Details');
      setForEdit(false);
    }
    if (x.includes(true)) {
      setEmailValidError('\u26A0 Email Already Exists');
    } else {
      setList([...list, {stname: name, stemail: email}]);
      // modal.current.flatlist.scrollToEnd();
      setEmail('');
      setName('');
      setDisabled1(true);
      setDisabled2(true);
    }
  };

  const editCard = (edName, edEmail) => {
    setButton('Update Details');
    setName(edName);
    setEmail(edEmail);
    setForEdit(true);
    setEmailValidError('');
    setNameValidError('');
    setObject({stname: edName, stemail: edEmail});
    setDisabled1(false);
    setDisabled2(false);
    setModalVisible(!modalVisible);
  };

  const deleteEntry = i => {
    list.splice(i, 1);
    setList([...list]);
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      {/* Fixed Section */}
      <View style={styles.containerList}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={styles.addButtton}>
          <Image
            style={styles.addLogo}
            source={require('../assets/images/add.png')}
          />
        </TouchableOpacity>
        <View style={styles.listHeading}>
          <Text style={styles.listHead}>{'Student List'}</Text>
        </View>
        <FlatList
          style={styles.list}
          ref={flatlist}
          data={list}
          renderItem={({item, index}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardtext}>Name: {item.stname}</Text>
                <Text style={styles.cardtext}>Email: {item.stemail}</Text>
                <TouchableOpacity
                  onPress={() => {
                    let index = list.findIndex(ele => ele == item);
                    deleteEntry(index);
                  }}
                  style={styles.delete}>
                  <Image
                    style={styles.deleteIcon}
                    source={require('../assets/images/delete.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    editCard(item.stname, item.stemail);
                  }}
                  style={styles.edit}>
                  <Image
                    style={styles.editIcon}
                    source={require('../assets/images/edit.png')}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      {/* Modal section */}
      <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.subParent}>
            <Text style={styles.headingFixed}>Form</Text>
            <View style={styles.containerFixed}>
              <TextInput
                style={styles.nameInput}
                value={name}
                placeholder="Name"
                autoCapitalize="none"
                onChangeText={value => {
                  setName(value);
                  handleValidName()
                    ? setNameValidError(' ')
                    : setNameValidError('\u26A0 Enter Valid Name');
                }}
              />
              <Text style={styles.alert}>{nameValidError}</Text>
              <TextInput
                style={styles.emailInput}
                value={email}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={value => {
                  setEmail(value);
                  handleValidEmail()
                    ? setEmailValidError(' ')
                    : setEmailValidError('\u26A0 Enter Valid Email');
                }}
              />
              <Text style={styles.alert}>{emailValidError}</Text>
              {/* {check} */}
              <TouchableOpacity
                style={styles.addItem}
                activeOpacity={0.6}
                disabled={disabled1 || disabled2}
                onPress={addEntry}>
                <Text>{button}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{...styles.delete, ...styles.hide}}>
              <Image
                style={styles.backIcon}
                source={require('../assets/images/previous.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#000000',
    // alignItems: 'center',
  },
  subParent: {
    flex: 1,
    width: '100%',
  },
  containerFixed: {
    flex: 0.25,
    marginTop: '1%',
    width: '93%',
    backgroundColor: '#222222',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: '3%',
    borderWidth: 2,
    borderRadius: 15,
    marginHorizontal: '2%',
    borderColor: '#51C4D3',
    shadowColor: '#51C4D3',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 6.84,
    elevation: 5,
  },
  headingFixed: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'HoeflerText-Black',
    textDecorationLine: 'underline',
    paddingVertical: '2%',
    marginVertical: '2%',
    color: '#51C4D3',
    // backgroundColor: '#345B63',
    shadowColor: '#51C4D3',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 6.84,
    elevation: 5,
  },
  nameInput: {
    width: '65%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '2%',
    padding: '2%',
    backgroundColor: '#aaaaaa',
  },
  emailInput: {
    width: '65%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '2%',
    padding: '2%',
    backgroundColor: '#aaaaaa',
  },
  alert: {
    color: '#ff0000',
    fontWeight: '600',
    height: '10%',
  },
  addItem: {
    backgroundColor: '#35858B',
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffffff88',
  },
  addButtton: {
    width: '18%',
    height: '8.5%',
    position: 'absolute',
    bottom: '2%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#35858B22',
    shadowColor: '#51C4D3',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 1.84,
    elevation: 5,
    zIndex: 1,
  },
  addLogo: {
    height: '90%',
    width: '88%',
  },
  containerList: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#51C4D322',
    borderRadius: 15,
    borderColor: '#51C4D377',
    borderWidth: 2,
    shadowColor: '#51C4D3',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.45,
    shadowRadius: 6.84,
    elevation: 5,
  },
  listHeading: {
    width: '50%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  listHead: {
    color: '#51C4D3',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
    fontFamily: 'HoeflerText-Black',
    marginVertical: '3%',
    textDecorationLine: 'underline',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 6.84,
    elevation: 5,
  },
  card: {
    backgroundColor: '#111111f4',
    margin: '2%',
    padding: '4%',
    borderColor: '#51C4D355',
    borderWidth: 2,
    borderRadius: 10,
  },
  delete: {
    width: '6%',
    height: '55%',
    position: 'absolute',
    right: '2%',
    top: '25%',
    backgroundColor: '#ff2222',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  hide: {
    height: '3%',
    top: '1.3%',
    left: '6%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000000',
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 9.85,
    shadowRadius: 7.84,
    elevation: 5,
    zIndex: 1,
  },
  deleteIcon: {
    height: '60%',
    width: '60%',
  },
  backIcon: {
    height: '150%',
    width: '150%',
  },
  edit: {
    width: '6%',
    height: '60%',
    backgroundColor: '#51C4D3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: '10%',
    top: '25%',
  },
  editIcon: {
    height: '60%',
    width: '60%',
  },
  cardtext: {
    color: '#D8E3E7',
    fontWeight: '600',
  },
  modalContainer: {
    paddingTop: '20%',
    backgroundColor: '#000',
    flex: 1,
  },
});
