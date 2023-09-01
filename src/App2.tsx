// window.__CHILD_APP_ROOT__ = 'https://cainmaila.github.io/ex-micro-app-child'

import { useEffect } from 'react'

function logEvent(e: unknown) {
  console.log(e)
}

export default function App2() {
  useEffect(() => {
    document.addEventListener('testEvent', logEvent)
    return () => {
      document.removeEventListener('testEvent', logEvent)
    }
  }, [])

  return (
    <>
      <div>
        <h2>App2</h2>
        <child-app></child-app>
        <child-app-view2></child-app-view2>
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
