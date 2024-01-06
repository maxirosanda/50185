import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tasks from '../screens/Tasks'
import CreateTask from '../screens/CreateTask'
import TasksStack from './TasksStack'

const Tab = createBottomTabNavigator()

const TasksTap = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="TasksStack" component={TasksStack} />
    <Tab.Screen name="CreateTasks" component={CreateTask} />
  </Tab.Navigator>
  )
}

export default TasksTap
