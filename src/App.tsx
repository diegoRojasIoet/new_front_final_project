import {TodoCounter} from './components/molecules/TodoCounter'
import {TodoSearch} from './components/molecules/TodoSearch/TodoSearch'


function App() {


  return (
      <header >
        
        <TodoCounter />
        <TodoSearch searchValue={'searchValue'} setSearchValue={() => {}} loading={false}/>
        
      </header>
    
  )
}

export default App;