import React,{useContext} from 'react'
import { MyContext } from './Main'

export default function Child() {
const value = useContext(MyContext)
return (
    <div>
      <h3>Child</h3>
      <p>{value}</p>
    </div>
  )
}
