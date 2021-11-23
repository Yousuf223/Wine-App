import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()

  function ListUser() {
    return user.map(data => {
      return (
        <View
          key={data.id}
          style={{
            borderBottomWidth: 1,
            borderColor: '#eee',
            padding: 1,
            marginTop: 10
          }}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>
        </View>
      )
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.container} />
      <SafeAreaView >
        <View >
          <Icon name={'ios-home'} size={100} color={'purple'} />
          <View>
            <TouchableOpacity
              
              onPress={() => dispatch(fetchDataUser())}>
              <Text >Click here to show User data:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default connect(mapStateToProps, null)(Home)
