import { useRecoilState } from 'recoil'
import { cainState } from '../store'
import { useEffect } from 'react'

export const useCainStore = () => {
  const [cainVal, setCainVal] = useRecoilState(cainState)
  useEffect(() => {
    const _t = setTimeout(() => {
      setCainVal('Cain App Root - Updated')
    }, 3500)
    return () => {
      clearTimeout(_t)
    }
  }, [setCainVal])
  return { cainVal }
}
