//IMPORTS

import UserGreeting from "./components/userGreeting"
import Soma from "./components/soma"
import UserCard from "./components/userCard"
import Mailbox from "./components/mailbox"
import DepartureList from "./components/departedList"
import PlatformOccupancy from "./components/platformOccupancy"

export default function App() {

  //LOGICA

  const user = {
    id: "001",
    primeiro: "Alberto",
    ultimo: "Menezes",
    avatarUrl: "./src/assets/avatar.jpg"
  }

  const messages = [
    {
      text: "hey, olá",
      id: "A-01"
    },
    {
      text: "hey, olá Deus na Terra",
      id: "A-02"
    }

  ]

  const departures = [
    { id: "ic-1842", destination: "Sintra", time: "18:42", platform: 3 },
    { id: "ir-1850", destination: "Cascais", time: "18:50", platform: 5 },
  ]

  return (
    //HTML
    <>
      <UserGreeting user = { user }/>
      <Soma a={3} b={7} />
      <UserCard user={user} onSelect={(userId) => console.log(userId)} />
      <UserGreeting />
      <Mailbox unreadMessages={[]} />
      <Mailbox unreadMessages={messages} />

      <DepartureList departures={departures} />
      <PlatformOccupancy/>
    </>
  )
}
