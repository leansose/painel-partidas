//IMPORTS

import UserGreeting from "./components/userGreeting"
import Soma from "./components/soma"

export default function App() {

  //LOGICA

  const user = {id: "001", primeiro: "Alberto", ultimo: "Menezes" }

  return (
    //HTML
    <>
      <UserGreeting user = { user }/>
      <Soma a={3} b={7} />
    </>
  )
}
