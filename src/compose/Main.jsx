import React from 'react'
import Child from './Child'

//context
export const MyContext = React.createContext();

export default function Main() {
  return (
    <div>
      <h3>Main</h3>
      <MyContext.Provider value="transmission">
        <Child/>
     </MyContext.Provider>
    </div>
  )
}
