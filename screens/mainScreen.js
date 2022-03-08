import React from "react";
import { View, StyleSheet, Text } from 'react-native';

import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { connect } from "react-redux";
import { authUser } from "../redux/actions/authAction";
import { bindActionCreators } from "redux";

function MainScreen({ route, navigation }, props) {
  return (
    <View>
      <Text>Yay its working</Text>
    </View>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    authUser
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);