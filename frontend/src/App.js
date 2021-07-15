import Header from './components/Header'
import MostPopular from './components/MostPopular' 
import Banner from './components/Banner' 
import Food_Cards from './components/Food_Cards' 
import Controls from './components/Controls'
import './styles/controls.css'
import './styles/food_cards.css'
import './styles/header.css'
import './styles/header_banner.css'


function App() {
  return (
    <div className="App"> 
        <Header />  
        {/* <MostPopular /> */}
        <Controls />
        {/* <Banner /> */}
        <Food_Cards />
    </div>
  );
}

export default App;
