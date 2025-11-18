import './App.css'
// child component import
import Article3 from './components/Article3' 
// add child component inside the parent component
function App() {
  return (
      <div className="App">
      <Article3 name="Fruit" titles={["Apple", "Banana", "Watermelon"]} />
      <br />
      <Article3 name="Laptop" titles={["Apple", "Thinkpad", "Dell"]} />
      </div>
  )
}

export default App;
