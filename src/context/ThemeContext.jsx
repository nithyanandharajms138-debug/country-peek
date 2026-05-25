import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // initialize from body attribute or localStorage
    const stored = (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('theme')) || null
    if (stored) {
      setTheme(stored)
      if (stored === 'dark') document.body.setAttribute('data-theme', 'dark')
    }
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    if (next === 'dark') document.body.setAttribute('data-theme', 'dark')
    else document.body.removeAttribute('data-theme')
    try { localStorage.setItem('theme', next) } catch (e) {}
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default ThemeContext
