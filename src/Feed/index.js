import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  requireNativeComponent,
} from 'react-native';
import React, {useState} from 'react';
import {data} from '../assets/dummyfeeds';
const {width, height} = Dimensions.get('screen');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

const FeedScreen = ({}) => {
  const LeftBlock = ({onButtonPressed = () => {}}) => {
    const [isPressed, setIsPressed] = useState(false);
    const [count, setcount] = useState(0);
    const onPressed = () => {
      setIsPressed(!isPressed);
      onButtonPressed();
      if(isPressed){
        setcount(count-1);
      }else{
        setcount(count+1);
      }
      
    };
    return (
      <View
        style={{
          width: '35%',
        }}>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={onPressed}>
            {isPressed ? (
              <AntDesign name="heart" size={25} color={'#E6425E'} />
            ) : (
              <AntDesign name="hearto" size={25} color={"#000"}/>
            )}
          </TouchableOpacity>
          <View>
            <AntDesign name="message1" size={25} color={"#000"}/>
          </View>
          <View>
            <Ionicons name="md-paper-plane-outline" size={25} color={"#000"}/>
          </View>
        </View>
        <Text
          style={{
            marginHorizontal: '7%',
            fontSize: 15,
            fontWeight: '700',
            color: '#000',
          }}>
          {count} {count >1 ? 'likes' :'like'}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 10}}>
        <View style={{elevation:1,padding:10,justifyContent:'space-between',flexDirection:'row'}}>
         <Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>InstaTej</Text>
         <View style={{flexDirection:'row',alignItems:'center',width:'18%',justifyContent:'space-between',marginRight:10}}>
         <Octicons name="diff-added" size={25} color={"#000"}/>
         <Fontisto name="messenger" size={25} color={"#000"}/>
         </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id}
          ListFooterComponent={()=>{
            return(
              <View style={{marginBottom:'10%'}}/>
            )
          }}
          renderItem={({item}) => {
            return (
              <View style={{marginBottom: '5%'}}>
                <View style={{borderTopWidth: 0.5,flexDirection:'row',alignItems:'center',padding:6,justifyContent:'space-between'}}>
                  <View style={{margin: 5,flexDirection:'row',alignItems:'center'}}>
                    <Image
                      source={item.usrimg}
                      style={{width: 40, height: 40, borderRadius: 30}}
                    />
                    <View style={{marginLeft:7}}>
                    <Text style={{fontSize:15,fontWeight:'600',color:'#000'}}>{item.name}</Text>
                    <Text style={{color:'#000'}}>{item.location}</Text>
                  </View>
                  </View>
                  <View>
                    <Entypo name='dots-three-vertical' size={20} color={"#000"}/>
                  </View>
                </View>
                <Image
                  source={item.img}
                  style={{width: '100%', height: height * 0.5}}
                />
                <View
                  style={{
                    
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <LeftBlock />
                  <View style={{marginRight: 10, marginVertical: 10}}>
                    <Feather name="bookmark" size={25} color={"#000"}/>
                  </View>
                </View>
                <View style={{margin:7}}>
                  <Text style={{fontSize:15,fontWeight:'700',color:'#000'}}>{item.name} <Text style={{fontWeight:'normal'}}>{item.description}</Text></Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default FeedScreen;
