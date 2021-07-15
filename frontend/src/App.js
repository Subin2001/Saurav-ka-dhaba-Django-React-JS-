import Header from './components/Header'
import MostPopular from './components/MostPopular' 
import Food_Cards from './components/Food_Cards' 
import 'bootstrap/dist/css/bootstrap.min.css'
import Controls from './components/Controls'
import './styles/controls.css'
import './styles/food_cards.css'


function App() {
  return (
    <div className="App"> 
        <Header />  
        <MostPopular />
        <Controls />
        <Food_Cards />
    </div>
  );
}

export default App;
