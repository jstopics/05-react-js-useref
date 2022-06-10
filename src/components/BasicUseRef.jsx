import {useRef} from 'react'

export default function BasicUseRef() {
  const spanElement = useRef()

  const changeText = () => {
    spanElement.current.innerText = 'Hello World '
  }

  return (
    <div>
      <button onClick={changeText}>Change Text</button>
      <span ref={spanElement}>Hi 👋</span>
    </div>
  )
}