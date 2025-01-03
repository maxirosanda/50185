import { FlatList, StyleSheet} from 'react-native'
import CategoryItem from './CategoryItem'
import { useSelector} from 'react-redux'

const Categories = () => {

  const categories = useSelector((state) => state.shop.value.categories)

  return (
    <FlatList
        style={styles.container}
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem  category={item}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        width:"100%",
        
    }
})