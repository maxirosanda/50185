import { StyleSheet, Text,Image,useWindowDimensions, Pressable } from 'react-native'
import { colors } from '../Global/colors'
import { useNavigation } from '@react-navigation/native'
import {  useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shop/shopSlice'

const ProductItem = ({item}) => {

  const {width} = useWindowDimensions()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <Pressable style={styles.container}  onPress={()=>{
      navigation.navigate("Product",{id:item.id})
      dispatch( setProductSelected(item.id))
      }} >
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
      <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
        />
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
   container:{
        width:"80%",
        height:100,
        backgroundColor:colors.green1,
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        gap:30
    },
    text:{
      width:"60%",
      textAlign:"center",
      fontSize:20
    },
    textMin:{
      width:"60%",
      textAlign:"center",
      fontSize:15
    },
    image:{
        minWidth:90,
        height:90,
        width:"30%"
    }
})