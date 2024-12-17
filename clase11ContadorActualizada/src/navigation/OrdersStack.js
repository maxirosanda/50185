import { createStackNavigator } from '@react-navigation/stack'
import Header from '../Components/Header'
import Orders from '../Screens/Orders'

const Stack = createStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Ordenes"/>
                }
            }
        }
    >
        <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  )
}

export default OrdersStack
