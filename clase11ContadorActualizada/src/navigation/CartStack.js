import { createStackNavigator } from '@react-navigation/stack'
import Header from '../Components/Header'
import Cart from '../Screens/Cart'

const Stack = createStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Carrito"/>
                }
            }
        }
    >
        <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default CartStack
