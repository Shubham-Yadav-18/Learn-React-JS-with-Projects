import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./contexts/UserContextProvider"


function App() {


  return (
    <UserContextProvider >
      <h1 className="text-white">welcome to Context API</h1>
      <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App
