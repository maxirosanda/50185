import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tasks from '../screens/Tasks'
import Task from '../screens/Task'

const Stack = createNativeStackNavigator()

const TasksStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Task" component={Task} />
      </Stack.Navigator>
  )
}

export default TasksStack

