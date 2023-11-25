import { View ,Text , StyleSheet , Button, ScrollView} from "react-native"

const App = () => {
  return  <View style={styles.container}>
            <View style={styles.containerBoxes}>
              <View style={styles.box}>
                <Text>1</Text>
              </View>
              <View style={styles.box}>
                <Text>2</Text>
              </View>
              <View style={{...styles.box ,...styles.box3}}>
                <Text>3</Text>
              </View>
            </View>
            <View style={{...styles.containerBoxes,...styles.bgPink}}>
              <View style={styles.box}>
                <Text >4</Text>
              </View>
              <View style={styles.box}>
                <Text>5</Text>
              </View>

            </View>
            <ScrollView>
              <View style={styles.containerCard}>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>Coca Cola 2.5 lt</Text>
                    <Text style={styles.descriptionCard}>El poder de la hidratación y variedad de productos que marcan la diferencia en tus días</Text>
                    <Button title="Comprar"/>
                </View>
              </View>
            </ScrollView>
            <View style={{...styles.containerBoxes,...styles.bgPink}}>
              <View style={styles.box}>
                <Text >4</Text>
              </View>
              <View style={styles.box}>
                <Text>5</Text>
              </View>

            </View>
          </View>
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"red",
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    marginTop:20
  },
  containerBoxes:{
    width:"100%",
    backgroundColor:"blue",
    flexDirection:"row"
  },
  box:{
    backgroundColor:"violet",
    padding:10,
    margin:10,
    flex:1
  },
  box3:{
    flex:2
  },
  bgPink:{
    backgroundColor:"pink"
  },
  containerCard:{
    backgroundColor:"green",
    width:"100%",
    flexDirection:"row",
    flexWrap:"wrap"
    
  },
  card:{
    width:"45%",
    backgroundColor:"yellow",
    padding:10,
    margin:"2.5%",
    gap:5
  }
})