import { createContext, useContext, useEffect, useReducer } from 'react'

const FavouritesContext = createContext()

function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE': {
      const exists = state.some((c) => c.cca3 === action.payload.cca3)
      if (exists) return state
      return [...state, action.payload]
    }
    case 'REMOVE_FAVOURITE': {
      return state.filter((c) => c.cca3 !== action.payload)
    }
    default:
      return state
  }
}

export function FavouritesProvider({ children }) {
  const initial = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favourites') || '[]') : []
  const [favourites, dispatch] = useReducer(favouritesReducer, initial)

  useEffect(() => {
    try { localStorage.setItem('favourites', JSON.stringify(favourites)) } catch (e) {}
  }, [favourites])

  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  return useContext(FavouritesContext)
}

export default FavouritesContext
