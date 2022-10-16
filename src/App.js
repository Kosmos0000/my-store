import './App.css';
import ProductItem from "./components/productItem/productItem";
import {useSelector} from "react-redux";

function App() {

    let items = useSelector((state) => state.goods.items);

    let itemsComponents = items.map((item) => <ProductItem item={item}/>);

  return (
    <div className="App">
        {itemsComponents}
    </div>
  );
}

export default App;
