import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDeleteTaskMutation, useGetTaskQuery } from '../app/services/tasks'

const Task = ({navigation,route}) => {
  
  const [triggerDeleteTask] = useDeleteTaskMutation()
  const {id}  = route.params
  const {data:task,isError,isSuccess,error,isLoading} = useGetTaskQuery(id)

  if(isLoading) return null



  return (
    <View>
      <Text>Task:  {task.title}</Text>
      <Button title='Borrar' onPress={()=>{
        triggerDeleteTask(id)
        navigation.goBack()
      }} />
      <Button title='Actualizar' onPress={()=> navigation.navigate("UpdateTask",{id})}/>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({

})