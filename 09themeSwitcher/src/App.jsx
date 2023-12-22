import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'


function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightThemeMode = () => {
    setThemeMode("light")
  }

  const darkThemeMode = () => {
    setThemeMode("dark")
  }

   
//actual change 

useEffect(() => {
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(themeMode)
},[themeMode]);



  return (
    <>
    <ThemeProvider value={{themeMode, darkThemeMode, lightThemeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>

    </>
  )
}

export default App
