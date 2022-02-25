import { useEffect, useState } from "react";

import { sortFruits } from "./utils/sortFruits";

import FRUITS from "./mockData/FRUITS.json";

export const useApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fruits, setFruits] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchFruits = async () => {
    setIsLoading(true);

    let fruitsData = await new Promise((resolve, _) => {
      setTimeout(() => {
        const formattedFruits = FRUITS.map((item, index) => ({
          id: item + index,
          label: item,
        }));

        resolve(formattedFruits);
      }, 2000);
    });

    setFruits(sortFruits(fruitsData));
    setIsLoading(false);
  };

  const filterList = (id, list) => {
    let selectedItem = null;
    const updatedList = list.filter((item) => {
      if (item.id !== id) return true;
      else {
        selectedItem = item;
        return false;
      }
    });

    return { selectedItem, updatedList };
  };

  const handleAddToFavorites = (id) => {
    const { selectedItem, updatedList } = filterList(id, fruits);

    setFruits(sortFruits(updatedList));
    setFavorites(sortFruits([...favorites, selectedItem]));
  };

  const handleRemoveFromFavorites = (id) => {
    const { selectedItem, updatedList } = filterList(id, favorites);

    setFavorites(sortFruits(updatedList));
    setFruits(sortFruits([...fruits, selectedItem]));
  };

  const useMount = () => {
    fetchFruits();
  };

  useEffect(useMount, []);

  return {
    isLoading,
    fruits,
    favorites,
    handleAddToFavorites,
    handleRemoveFromFavorites,
  };
};
