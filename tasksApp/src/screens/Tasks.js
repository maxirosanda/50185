import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { useGetTasksQuery } from '../app/services/tasks'


const Tasks = ({navigation}) => {

  const {data:tasks,isLoading} = useGetTasksQuery()

  if(isLoading) return null

  return (
    <View>
      <Text>Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item})=><View><Text>{item.title}</Text><Button title='Tarea' onPress={()=> navigation.navigate("Task",{id:item.id})} /></View>}
      />
        
      </View>
  )
}

export default Tasks

const styles = StyleSheet.create({})