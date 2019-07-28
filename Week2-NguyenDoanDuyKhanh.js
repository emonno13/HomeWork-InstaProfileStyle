import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView,Alert } from 'react-native';
import { Ionicons,MaterialIcons,MaterialCommunityIcons,Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

//import { ScrollView } from 'react-native';

//tạo biến màu sắc cho items
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
//tạo mảng hình ảnh
const imgData = [
  { id: 1, imgSource: require('./assets/10.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 8, imgSource: require('./assets/7.jpg') },
  { id: 9, imgSource: require('./assets/8.jpg') },
  { id: 10, imgSource: require('./assets/9.jpg') },
  { id: 11, imgSource: require('./assets/10.jpg') }
];

//touchableopacity : nhấp nháy khi ấn vào 
// VIEW ------------------------------------------------------------------------------------------------------------
export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  
FollowFunction=()=>{
  Alert.alert("Followed");
}
SendFunction=()=>{
  Alert.alert("message sended");
}

  return (
    <View style={styles.container}>
<View style={styles.Instagram}>
<Image
  source={{
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
  }}
  style={{
    flex: 1,
    width: null,
    height: 20
  }}
  resizeMode="contain"
/>
</View>
<View style={styles.headerTop}>
        <TouchableOpacity 
                style={styles.bottomButton} >
                <MaterialIcons name="arrow-back" size={30} color='grey' />
        </TouchableOpacity>
        <TouchableOpacity 
                style={styles.bottomButton} >
                <MaterialCommunityIcons name="image-filter-center-focus-weak" size={30} color='grey' />
        </TouchableOpacity>
</View>

     <View style={styles.headerGroup}>
       <View style={styles.imageWrapper}>
       <Image
              source={require('./assets/duykhanh.png')}
              style = {styles.avatarImg}
            />
       </View>

        <View style={styles.userInfo}>
          <Text style={styles.nameText}>Duy Khanh</Text>
          <Text style={styles.jobText}>DR.ANIMAL</Text>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity activeOpacity = { .5 } onPress={this.FollowFunction} >
                  {/* <Text style={styles.followText}>Follow</Text> */}
                  <LinearGradient
                    colors={[SEND_MESSAGE_COLOR,FOLLOW_COLOR]}
                    style={styles.followButton}>
                    <Text style={styles.followText}>
                        Follow
                    </Text>
                 </LinearGradient>
                  </TouchableOpacity>
                   {/* <LinearGradient
                    colors={[SEND_MESSAGE_COLOR,FOLLOW_COLOR]}
                    style={{ padding: 10, alignItems: 'center', borderRadius: 5 }}>
                    <Text
                        style={{
                        backgroundColor: 'transparent',
                        fontSize: 15,
                        color: '#fff',
                      }}>
                        Follow
                    </Text>
                 </LinearGradient> */}
                <TouchableOpacity activeOpacity = { .5 } onPress={this.FollowFunction} 
                style={styles.sendMessageButton} >
                <Ionicons name="md-send" size={20} color="white" />
                  </TouchableOpacity>
              </View>
        </View>
      </View>

     <View style={styles.countLikeGroup}>
       <View style={styles.countGroup}>
         <Text style={styles.countText}>210</Text>
         <Text style={styles.countLabel}>Photo</Text>
       </View>
       <View style={styles.countGroup}>
          <Text style={styles.countText}>15K</Text>
         <Text style={styles.countLabel}>Followers</Text>
         </View>
       <View style={styles.countGroup}>
         <Text style={styles.countText}>605</Text>
         <Text style={styles.countLabel}>Following</Text>
       </View>
     </View>

    <ScrollView style={{
      flex: 0.4
    }}
    >
    <View style={styles.imagesGroup}>
      <View style={{
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
        
        }}> 
        {imgData.slice(0,centerImgData).map(item =>{
          return (
          <Image source={item.imgSource} style={{
            width:150,
            height: 100,
            borderRadius:20,
            marginBottom:15
            
          }}/>)
        })}
      </View>
      <View style={{
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
        }}> 
        {imgData.slice(centerImgData).map(item =>{
          return (
          <Image source={item.imgSource} style={{
            width:150,
            height: 100,
            borderRadius:20,
            
            marginBottom:15
          }}/>)
        })}
      </View>

    </View>
    </ScrollView>
        <View style={styles.BottomTab}>
        <TouchableOpacity 
                style={styles.bottomButton} >
                <MaterialCommunityIcons name="menu" size={30} color='purple' />
        </TouchableOpacity>
        <TouchableOpacity 
                style={styles.bottomButton} >
                <MaterialCommunityIcons name="plus-circle-outline" size={30} color='purple' />
        </TouchableOpacity>
        <TouchableOpacity 
                style={styles.bottomButton} >
                <Feather name="user" size={30} color='purple' />
        </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    backgroundColor: '#fff',
 
  },

// STYLE ---------------------------------------------------------------------------------------------------
Instagram: {flex:0.1,backgroundColor:'white'},
headerTop:{
  flex:0.1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems: 'center'
},
headerGroup: {
  flex: 0.3, 
  backgroundColor:'white',
  alignItems : 'stretch',
  flexDirection:'row'
},
countLikeGroup: {
  flex:0.2,
  flexDirection:'row',
  justifyContent: 'space-around',
  alignItems:'center'
},
imagesGroup: {
  flex:0.4,
  flexDirection:'row',
  justifyContent:'space-around'
},
BottomTab:{
  flex: 0.1,
  flexDirection: 'row',
  justifyContent:'space-around'
},
//flex của view image và info bằng nhau sẽ chia đôi
imageWrapper:{
 flex : 1,
 alignItems : 'center',
 justifyContent:'center' // nội dung nằm giữa view
},
avatarImg : {
  width: 120,
  height: 120
},
userInfo: {
  flex :1,
  flexDirection: 'column',
  justifyContent : 'space-around' // canh giữa các item
},
followButton: {
  
  padding: 10, alignItems: 'center', borderRadius: 5,
  width: 100,
  height : 30,
  justifyContent: 'center', // chữ follow nằm giữa
  alignItems : 'center', // chữ follow canh giữa 
  borderRadius: 20,
  shadowColor: "#000", //tạo shadow cho nút
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.7,
  shadowRadius: 16.00,
  elevation: 24,
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
},

followText:{ //chữ follow
  color:'white',
  fontSize:17,
  fontWeight: '400' // độ dậm nhạt
},
sendMessageButton: {
  backgroundColor: SEND_MESSAGE_COLOR,
  width: 50,
  height : 30,
  justifyContent: 'center',
  alignItems:'center',
  borderRadius: 20,
  marginLeft: 5,
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.7,
  shadowRadius: 16.00,
  elevation: 24,
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
},
buttonWrapper: {
  flexDirection: 'row'
},
nameText: {
fontSize : 20,
fontWeight : "bold", // chữ in hoa
color : 'gray'
},
jobText: {
  fontSize : 18,
  fontWeight : '400', // chữ in hoa
  color : 'gray'
  },

//----------------------------
countGroup:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center'

},
countText:{
fontSize :30,
fontWeight: 'bold'
},
countLabel:{
fontsize: 15,
fontWeight: '400',
color:'grey'
},

bottomButton:{
  width:50,
  height:30,
  justifyContent:'center',
  alignItems:'center',
  marginBottom:15
}
});
