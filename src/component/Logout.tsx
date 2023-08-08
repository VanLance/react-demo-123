import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"

export default function Logout() {

  console.log('In Logout')

  const { setUser } = useContext(UserContext)
  


  return (
    <div>Logout</div>
  )
}
