import { createStackNavigator } from '@react-navigation/stack'
import Header from '../Components/Header'
import Home from '../Screens/Home'
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'

const Stack = createStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title={
                                        route.name === "Home" ? "Categorias" :
                                        route.name === "Category" ? route.params.category :
                                        "Detalle"
                    }               />
                }
            }
        }
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={ItemListCategories} />
        <Stack.Screen name="Product" component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ShopStack
