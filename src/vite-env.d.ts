/// <reference types="vite/client" />
declare interface Window {
  __CHILD_APP_ROOT__?: string
}

declare namespace JSX {
  interface IntrinsicElements {
    'child-app': unknown
    'child-app-view2': unknown
  }
}
