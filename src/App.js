import './App.css';
import ProductItem from "./components/productItem/productItem";
import {useSelector} from "react-redux";
import ContainerItems from "./components/containerItems/containerItems";

function App() {

  return (
    <div className="App">
        <ContainerItems/>
    </div>
  );
}

export default App;
