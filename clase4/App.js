import { useState } from "react"
import { View , Text, StyleSheet,TextInput, Button } from "react-native"
import uuid from 'react-native-uuid'

const App = () => {

    const [newTitleProduct,setNewTitleProduct] = useState("")
    const [newPriceProduct,setNewPriceProducts] = useState("")
    const [products,setProducts] = useState([])

    const handlerAddProduct = () => {
        const newProduct = {
          id:uuid.v4(),
          title:newTitleProduct,
          price:newPriceProduct
        }
        setProducts(current => [...current,newProduct] )
        setNewTitleProduct("")
        setNewPriceProducts("")
    }

    return  <View  style={styles.container}>
              <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder="Nombre"
                value={newTitleProduct}
                onChangeText={(t)=> setNewTitleProduct(t)}
                />
                <TextInput 
                style={styles.input}
                placeholder="Precio"
                value={newPriceProduct}
                onChangeText={(t)=> setNewPriceProducts(t)}
                />
                <Button title="ADD" onPress={handlerAddProduct} />
              </View>
              <View style={styles.listContainer}>
                {products.map(product => <View key={product.id} style={styles.cardProduct}>
                                          <Text style={styles.cardTitle}>{product.title}</Text>
                                          <Text>{product.price} $</Text>
                                          <Button title="DEL"/>
                                          </View>
                )}
              </View>
           </View>
    
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"start",
      alignItems:"center",
      marginTop:30
    },
    inputContainer:{
      flexDirection:"row",
      alignItems:"center",
      width:"100%",
      justifyContent:"space-around"
    },
    input:{
      borderWidth:4,
      paddingHorizontal:10,
      paddingVertical:5,
      width:150
    },
    listContainer : {

      width:"100%"
    },
    cardProduct:{

      flexDirection:"row",
      padding:10,
      margin:10,
      justifyContent:"space-around",
      alignItems:"center",
      borderWidth:4
    }
 
  })



export default App