import {useRef, useState} from 'react'

export default function Variables() {
  let vanillaVariable = 'Vanilla' // bad and useless ❌
  const [useStateVariable, setUseStateVariable] = useState('Chocolate')
  const useRefVariable = useRef('Strawberry')

  const changeVanilla = () => {
    vanillaVariable = 'New Vanilla'
    setUseStateVariable( 'New Chocolate')
    useRefVariable.current = 'New Strawberry'
  }

  return (
    <div>
      <p><b>vanilla</b> Variable: {vanillaVariable}</p>
      <p><b>useState</b> Variable: {useStateVariable}</p>
      <p><b>useRef</b> Variable: {useRefVariable.current}</p>
      <button onClick={changeVanilla}>New Vanilla</button>
    </div>
  )
}