import "./App.css";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import RowPost from "./components/RowPost/RowPost";
import {Action,Originals} from './constants'

function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <RowPost title='Netflix Originals' url={Originals} isSmall={false}></RowPost>
      <RowPost title="Action" url={Action} isSmall={true}></RowPost>
    </div>
  );
}

export default App;