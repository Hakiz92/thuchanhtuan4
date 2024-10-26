import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, FlatList, ScrollView } from 'react-native'; 
import React, { useEffect, useState } from "react"; 
import axios from 'axios' 

export default function App() {

  //tao mang category
  const [category, setCategory] = useState([
    { id: 1, name: 'Resort', image: require("./assets/baiTH4/resort.png")},
    { id: 2, name: 'Homestay', image: require("./assets/baiTH4/homestay.png")},
    { id: 3, name: 'Hotel', image: require("./assets/baiTH4/hotel.png")},
    { id: 4, name: 'Lodge', image: require("./assets/baiTH4/lodge.png")},
    { id: 5, name: 'Villa', image: require("./assets/baiTH4/villa.png")},
    { id: 6, name: 'Apartment', image: require("./assets/baiTH4/apartment.png")},
    { id: 7, name: 'Hostel', image: require("./assets/baiTH4/hostel.png")},
    { id: 8, name: 'See all', image: require("./assets/baiTH4/seeall.png")},
  ])
  //tao mang location
  const [location, setLocation] = useState([
    { id: 1, image: require("./assets/baiTH4/photo1.png")},
    { id: 2, image: require("./assets/baiTH4/photo2.png")},
    { id: 3, image: require("./assets/baiTH4/photo3.png")},
  ])

  const [recommended, setRecommended] = useState([
    { id: 1, image: require("./assets/baiTH4/photo4.png")},
    { id: 2, image: require("./assets/baiTH4/photo5.png")}
  ])
  //set api cho 3 mang
  const [categoryAPI, setCategoryAPI] = useState([])
  const [locationAPI, setLocationAPI] = useState([])
  const [recommendedAPI, setRecommendedAPI] = useState([])

  //goi api bang cach su dung useEffect
  useEffect(() => {
    getCategories();
    getLocations();
    getRecommendeds();
  }, [])

  const getCategories = async() => {
    console.log("Ham categories da duoc goi");
    try{
      const res = await
      axios.get("https://6713d904690bf212c75ff9b2.mockapi.io/Categories");
      console.log("Data fetched:", res.data); //Kiem tra du lieu neu da nhan dc api chua
      if(Array.isArray(res.data)){
        setCategoryAPI(res.data); //cap nhat state voi du lieu tu api
      }else{
        console.log("Du kieu khong phai la mang", res.data);
      }
    }catch(error){
      console.log("Fetch error", error);
    }
  }

   const getLocations = async() => {
    console.log("Ham Locations da duoc goi");
    try{
      const res = await
      axios.get("https://6713d904690bf212c75ff9b2.mockapi.io/locations");
      console.log("Data fetched:", res.data); //Kiem tra du lieu neu da nhan dc api chua
      if(Array.isArray(res.data)){
        setLocationAPI(res.data); //cap nhat state voi du lieu tu api
      }else{
        console.log("Du kieu khong phai la mang", res.data);
      }
    }catch(error){
      console.log("Fetch error", error);
    }
  }

  const getRecommendeds = async() => {
    console.log("Ham Recommended da duoc goi");
    try{
      const res = await
      axios.get("https://6713d904690bf212c75ff9b2.mockapi.io/Categories");
      console.log("Data fetched:", res.data); //Kiem tra du lieu neu da nhan dc api chua
      if(Array.isArray(res.data)){
        setCategoryAPI(res.data); //cap nhat state voi du lieu tu api
      }else{
        console.log("Du kieu khong phai la mang", res.data);
      }
    }catch(error){
      console.log("Fetch error", error);
    }
  }

  //Header, Footer
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: '#5958b2', height: 200, justifyContent: 'center', paddingHorizontal: 30, rowGap: 30}}>
        <View style={{flexDirection: 'row'}}>
        <Image style={{width: 40, height: 40}}
        source={require("./assets/baiTH4/logoicon.png")}
        />
        <View style={{flexDirection: 'row', alignItems:'center', backgroundColor:'white', borderRadius: 10, marginLeft: 10, justifyContent: 'space-between'}}>
        <TextInput placeholder="Search here .." style={{marginLeft: 10, color: 'gray', flex: 1, height: '100%'}}/>
        <Image source={require("./assets/baiTH4/findicon.png")} style={{borderRadius: 20, marginLeft: 30}} />
        </View>
        </View>
         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
         <View style={{flexDirection: 'row'}}>
        <Image source={require("./assets/baiTH4/personicon.png")} style={{height: 40, width:40, borderRadius: 20}} />
        <View style={{justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', color: 'white', marginLeft: 5}}>Welcome!</Text>\
        <Text style={{color: 'white', marginLeft: 5}}>Donna Stroupe</Text>
        </View>
         </View>
         <View>
        <Image source={require("./assets/baiTH4/ringicon.png")} style={{width: 40, height: 40}} />
        </View>
         </View>
        </View>

        <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 25}}>
        <Text style={{fontSize: 20}}>Category</Text>
        <Image source={require("./assets/baiTH4/3gach.png")} style={{height:30, width: 30}} />
        </View>
          <FlatList 
        data={categoryAPI}
        renderItem={({item}) => {
          console.log(item);//kiem tra du lieu cua moi item
          return(
            <View style={{alignItems: 'center', flex: 1, padding: 5}}>
            <Image source={{uri : item.image}} style={{width: 40, height: 40}} />
            <Text>{item.name}</Text>
            </View>
          );
        }}
        numColumns={4}
        />
        </View>

        <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 25}}>
        <Text style={{fontSize: 20}}>Popular Destination</Text>
        <Image source={require("./assets/baiTH4/3gach.png")} style={{height:30, width: 30}} />
        </View>
        <FlatList 
        data={locationAPI}
        renderItem={({item}) => {
          console.log(item);//kiem tra du lieu cua moi item
          return(
            <View style={{alignItems: 'center', flex: 1, padding: 5}}>
            <Image source={{uri : item.image}} style={{width: 95, height: 95, borderRadius: 12}} />
            <Text>{item.name}</Text>
            </View>
          );
        }}
        horizontal = {true}
        />
        </View>

         <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 25}}>
        <Text style={{fontSize: 20}}>Recommended</Text>
        <Image source={require("./assets/baiTH4/3gach.png")} style={{height:30, width: 30}} />
        </View>
        <FlatList 
        data={locationAPI}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          console.log(item);//kiem tra du lieu cua moi item
          return(
            <View style={{alignItems: 'center', flex: 1, padding: 5}}>
            <Image source={{uri : item.image}} style={{width: 80, height: 80, borderRadius: 12}} />
            <Text>{item.name}</Text>
            </View>
          );
        }}
        horizontal = {true}
        />
        </View>
       
       <View>
       <View style={{backgroundColor: '#5958b2', height: 100, justifyContent: 'center', paddingHorizontal: 30, rowGap: 30}}>
       <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
       <Image source={require("./assets/baiTH4/homeicon.png")} style={{height: 40, width: 40}} />
       <Image source={require("./assets/baiTH4/exploreicon.png")} style={{height: 40, width: 40}} />
       <Image source={require("./assets/baiTH4/searchicon.png")} style={{height: 40, width: 40}}/>
       <Image source={require("./assets/baiTH4/profileicon.png")} style={{height: 40, width: 40}}/>
       </View>
       </View>
       </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
