import { Button, StyleSheet, Text, View } from 'react-native'
import { useGetTasksQuery } from '../app/services/tasks'


const Tasks = ({navigation}) => {

  const {data,isLoading,isError,error} = useGetTasksQuery()
  if(!isLoading) console.log(data)
  if(isError) console.log(error)

  return (
    <View>
      <Text>Tasks</Text>
        <Button title='Tarea' onPress={()=> navigation.navigate("Task")} />
      </View>
  )
}

export default Tasks

const styles = StyleSheet.create({})