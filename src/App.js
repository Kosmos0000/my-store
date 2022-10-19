import './App.css';
import ContainerItems from "./components/containerItems/containerItems";
import Filter from "./components/filter/filter";

function App() {

    return (
        <div className="App">
            <Filter/>
            <ContainerItems/>
        </div>
    );
}

export default App;
