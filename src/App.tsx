//IMPORTS

import UserGreeting from "./components/userGreeting"
import Soma from "./components/soma"
import UserCard from "./components/userCard"

export default function App() {

  //LOGICA

  const user = {
    id: "001",
    primeiro: "Alberto",
    ultimo: "Menezes",
    avatarUrl: "./src/assets/avatar.jpg"
  }

  return (
    //HTML
    <>
      <UserGreeting user = { user }/>
      <Soma a={3} b={7} />
      <UserCard user={user} onSelect={(userId)=> console.log(userId)}/>
    </>
  )
}
