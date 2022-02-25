import "./styles/App.css";

import { useApp } from "./useApp";
import { FruitList } from "./components/fruitList/FruitList";
import { Favorites } from "./components/favorites/Favorites";

function App() {
  const {
    isLoading,
    fruits,
    favorites,
    handleAddToFavorites,
    handleRemoveFromFavorites,
  } = useApp();

  return (
    <div className="App">
      {!!isLoading && (
        <div className="loader">
          <div className="loaderBar" />
        </div>
      )}
      <FruitList list={fruits} handleOnClick={handleAddToFavorites} />
      <Favorites list={favorites} handleOnClick={handleRemoveFromFavorites} />
    </div>
  );
}

export default App;
