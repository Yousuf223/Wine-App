import React, { useState, useRef } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  PanResponder,
  FlatList,
  Animated,
  ImageBackground
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { connect, useDispatch } from 'react-redux'
import Modal from 'react-native-modal';
import { fetchDataUser } from '../../stores/actions/user.action'
import Card from '../../components/Card/Card'
import CardDetail from '../../components/CardDetail/CardDetail'
import { CustomScrollView } from '../../components/CustomScrollView/CustomScrollView'
import { ScrollView } from 'react-native-gesture-handler'
import * as Progress from 'react-native-progress';
const Home = (props) => {
  const {navigation}=props
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);
  const cardData = [
    {
      number: '01'
    },
    {
      description: "Odell 90 Shilling",
      image: require('../../assets/images/wine2.png')

    },
    {
      description: "Ayinger Brauweisse",
    },
    {
      description: "Lagunitas IPA",
      image: require('../../assets/images/wine2.png')
    },
  ]
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset(
          {
            x: pan.x._value,
            y: pan.y._value
          }
        );
      }
    })
  ).current;

  // const {Count} = props;
  //     let list =  Count=== undefined?10:Count;
  var jsx = [];
  for (var i = 1; i <= 75; i++) {
    jsx.push(i)
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"  backgroundColor={'#f8ece0'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.header}>
              <TouchableOpacity 
              activeOpacity={0.8}
              onPress={() => navigation.toggleDrawer()}
              >
              <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
              </TouchableOpacity>
              <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
              <Image style={styles.notification} source={require('../../assets/images/notification.png')} />
            </View>
            <View style={styles.row2}>
              <View>
                <Text>Popular Beers</Text>
                <View style={{ width: 20, height: 1, backgroundColor: "#e74a07", marginTop: 6 }}></View>
              </View>
              <View style={styles.btn}>
                <Text style={styles.textView}>View All</Text>
              </View>
            </View>
            {/* <Image style={styles.beer} source={require('../../assets/images/beerCard.png')} /> */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('BeerMenu')}
              >
                <Card />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('BeerMenu')}
                activeOpacity={0.9}
              >
                <Card />
              </TouchableOpacity>
            </View>
            <View style={styles.row2}>
              <View>
                <Text>All Beers</Text>
                <View style={{ width: 20, height: 1, backgroundColor: "#e74a07", marginTop: 6 }}></View>
              </View>
              <View style={styles.btn}>
                <Text style={styles.textView}>View All</Text>
              </View>
            </View>
            {
              cardData.map((item) => {
                return (
                  <View style={{ marginVertical: 6, }}>
                    <CardDetail
                      number={item.number}
                      image={item.image}
                      decription={item.description} />
                    {/* {number} */}

                  </View>
                )

              })
            }

          </View>
        </ScrollView>
        <View
          style={styles.posi}>
          <Animated.View
            style={{
              transform: [{ translateY: pan.y }]
            }}
            {...panResponder.panHandlers}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.9}
            >
              <Image
                style={styles.beer} source={require('../../assets/images/beerCard.png')} />
            </TouchableOpacity>
          </Animated.View>
        </View >
        <Modal
          animationIn="slideInRight"
          animationOut="slideOutLeft"
          animationInTiming={600}
          animationOutTiming={600}
          backdropColor="#f8ece0"
          transparent={false}
          isVisible={modalVisible}
          onBackButtonPress={() => setModalVisible(!modalVisible)}
          onBackdropPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.rowModal}>
                <Text >Beer Card</Text>
                <Entypo onPress={() => setModalVisible(!modalVisible)} name='cross' size={25} color={'#85786f'} />
              </View>
              <View style={styles.rowProgress}>
                <Progress.Bar progress={0.3}
                  animated={true} width={260}
                  height={18}
                  color={"#e74a07"}
                  borderRadius={12}
                  borderWidth={0}
                  unfilledColor={"#e4d8cc"}
                />
                <Text style={{ color: "#867970", fontSize: 14, paddingLeft: 6,fontWeight:"bold" }}>7-75</Text>
              </View>
              {/* <View >
            <Text>1</Text>
          </View> */}
              <View style={styles.count}>
                {jsx.map((jsx, index) => {
                  return (
                    <View style={styles.loop}>
                      <Text style={styles.textNum}>{jsx}</Text>
                    </View>
                  )
                }
                )
                }
              </View>
            </ScrollView>
          </View>
        </Modal>
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
  container: {
    flex: 1,
    backgroundColor: "#f8ece0",
    // paddingHorizontal:20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10%"
  },
  menu: {
    width: 20,
    height: 15,
    resizeMode: "contain",
  },
  logo: {
    width: "80%",
    height: 40,
    resizeMode: "contain"
  },
  notification: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingTop: 16,
    position: "relative",
    zIndex: 10
  },
  btn: {
    borderWidth: 1,
    borderColor: "#e74a07",
    width: "16%",
    height: "90%",
    borderRadius: 4,
    alignItems: "center",

  },
  textView: {
    color: "#e74a07",
    fontSize: 10,
    fontWeight: "bold",
    paddingTop: 3
  },
  beer: {
    width: 60,
    height: 160,
  },
  posi: {
    position: "absolute",
    zIndex: 20,
    top: "30%",
    left: "83%"
  },
  modalView: {
    backgroundColor: '#f8ece0',
    borderRadius: 15,
    paddingVertical: 10
  },
  count: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginHorizontal: 10
  },
  loop: {
    width: "12%", height: 38,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center", margin: 3, borderRadius: 10
  },
  textNum: {
    color: "#c5b9ab",
    fontWeight: "bold"
  },
  rowModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  rowProgress:{
    flexDirection:"row",
    paddingHorizontal:10,
    paddingBottom:20
  }
})
export default connect(mapStateToProps, null)(Home)
