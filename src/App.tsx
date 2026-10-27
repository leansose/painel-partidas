//IMPORTS

import UserGreeting from "./components/userGreeting"

export default function App() {

  //LOGICA

  const user = {id: "001", primeiro: "Alberto", ultimo: "Menezes" }

  return (
    //HTML
    <>
      <UserGreeting user = { user }/>
    </>
  )
}
