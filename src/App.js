import './App.css';
import ContainerProductsItems from "./components/containerItems/containerProductsItems";
import Filter from "./components/filter/filter";
import {store} from "./redux-tollkit/redux";

function App() {


    return (
        <div className="App">
            <Filter/>
            <ContainerProductsItems/>
        </div>
    );
}

export default App;
