import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const App = () => {

  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </>
  )
}

export default App

