import { FlatList, StyleSheet, Text, View } from 'react-native'
import allOrders from "../Data/orders.json"
import OrderItem from '../Components/OrderItem'
import { useGetOrdersQuery } from '../app/services/shopServices'
import { useEffect, useState } from 'react'

const Orders = () => {

  const {data,isSuccess,isError,error} = useGetOrdersQuery()
  const [orders,setOrders] = useState([])

  useEffect(()=>{
    if(isSuccess && data) {
      const orders = Object.keys(data).map(key => data[key])
      setOrders(orders)
    }
    if(isError) console.log(error)
  },[isSuccess,isError,data,error])

  return (
    <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem order={item}/>}
    />
  )
}

export default Orders

const styles = StyleSheet.create({
    
})