import { useState } from 'react'
import SearchBar from './components/Searchbar'
import UserInfo from './components/UserInfo'

function App() {

  const [user, setUser] = useState(null);

  return (
    <>
        <SearchBar onUserFound={setUser}/>
        <UserInfo user={user}/>
    </>
  )
}

export default App
