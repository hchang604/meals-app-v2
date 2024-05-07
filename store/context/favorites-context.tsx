import React, {createContext, useMemo, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [] as string[],
  addFavorites: (id: string) => {},
  removeFavorites: (id: string) => {},
});

type FavoritesContextProps = {
  children?: React.ReactNode;
};

function FavoritesContextProvider(props: FavoritesContextProps) {
  const [favoriteMealids, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorites(id: string) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorites(id: string) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  }

  const value = useMemo(() => {
    return {
      ids: favoriteMealids,
      addFavorites,
      removeFavorites,
    };
  }, [favoriteMealids]);

  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
