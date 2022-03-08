import react, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

import { Input, Button } from "react-native-elements";
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { connect } from "react-redux";
import { authUser } from "../redux/actions/authAction";
import { bindActionCreators } from "redux";

function authScreen(props) {

  const [currentUsername, setCurrentUsername] = useState('');
  
  function authUser() {
    props.actions.authUser(currentUsername);
    console.log(props)
  }

  return (
    <View style={styles.rootWrapper}>
      <Text style={styles.headerText}>Hello there! 👋</Text>
      <View style={styles.formWrapper}>
        <Input
          placeholder="Username"
          autoCapitalize="none"
          leftIcon={
            <MaterialCommunityIcons name="at" color="black" size={26} />
          }
          onChangeText={(text) => setCurrentUsername(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={
            <MaterialCommunityIcons name="lock" color="black" size={26} />
          }
        />
        <Button
          title={'Log in'}
          buttonStyle={{
            borderColor: 'rgba(0, 0, 0, 1)',
            borderRadius: 5,
            borderWidth: 0.5,
          }}
          titleStyle={{
            color: 'rgba(0, 0, 0, 1)'
          }}
          type="outline"
          containerStyle={{
            width: 200,
          }}
          onPress={() => authUser()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootWrapper: {
    display: "flex",
    alignItems: 'center',
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36, 
    marginTop: 150
  },
  formWrapper: {
    marginTop: 120,
    width: '85%',
    display: "flex",
    alignItems: 'center',
  }
});

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    authUser
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(authScreen);