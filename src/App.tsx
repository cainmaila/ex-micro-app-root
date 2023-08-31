import { useEffect } from 'react'
import './App.css'
import App2 from './App2'
import { useCainStore } from './hooks'

function App() {
  useEffect(() => {
    window.addEventListener('message', onMessage)
    return () => {
      window.removeEventListener('message', onMessage)
    }
  }, [])
  const { cainVal } = useCainStore()
  return (
    <>
      <h1>Root App</h1>
      <h2>{cainVal}</h2>
      <App2></App2>
    </>
  )
}

export default App

function onMessage(e: MessageEvent) {
  console.log(e.data)
}
