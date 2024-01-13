import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { usePostTasksMutation } from '../app/services/tasks'

const CreateTask = ({navigation}) => {
  const [title,setTitle] = useState("")
  const [triggerPostTask] = usePostTasksMutation()

  return (
    <View>
      <Text>CreateTask</Text>
      <TextInput value={title} onChangeText={(t)=>setTitle(t)} placeholder='Titulo' />
      <Button title='Crear Tarea' onPress={()=> {
        triggerPostTask({title})
        setTitle("")
        navigation.navigate("TasksStack")
      } }/>
    </View>
  )
}

export default CreateTask

const styles = StyleSheet.create({})