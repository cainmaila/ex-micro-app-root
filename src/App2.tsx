// window.__CHILD_APP_ROOT__ = 'https://cainmaila.github.io/ex-micro-app-child'

import { useEffect, useState } from 'react'

function logEvent(e: unknown) {
  console.log(e)
}

export default function App2() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.addEventListener('testEvent', logEvent)
    return () => {
      document.removeEventListener('testEvent', logEvent)
    }
  }, [])

  useEffect(() => {
    const _t = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
    return () => {
      clearTimeout(_t)
    }
  }, [setCount])

  return (
    <>
      <div>
        <h2>App2</h2>
        <child-app></child-app>
        <child-app-view2 my-name={`${count}`}></child-app-view2>
        <div
          style={{
            height: '500px',
          }}
        >
          <gis-view></gis-view>
        </div>
      </div>
    </>
  )
}
