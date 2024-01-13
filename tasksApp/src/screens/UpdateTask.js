import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { usePatchTasksMutation } from '../app/services/tasks'

const UpdateTask = ({navigation,route}) => {
    const {id} = route.params
    const [title,setTitle] = useState()
    const [triggerPatchTask] = usePatchTasksMutation()
  return (
    <View>
      <Text>UpdateTask</Text>
      <TextInput value={title} onChangeText={(t)=>setTitle(t)} />
      <Button title='ejecutar' onPress={()=>{
        triggerPatchTask({id,task:{title}})
        navigation.goBack()
      }} />
    </View>
  )
}

export default UpdateTask

const styles = StyleSheet.create({})