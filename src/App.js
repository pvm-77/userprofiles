import { useEffect, useState } from 'react';
import { fetchUsers } from './services/users';
import UserProfile from './component/UserProfile';
import Card from './component/Card';
import ErrorMessage from './component/ErrorMessage';

import Loader from './component/Loader';
import UsersList from './component/UsersList';
function App() {


  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersList = await fetchUsers();
        setUsers(usersList);

        if (usersList.length > 0) {
          setSelectedUser(usersList[0]);
          setLoading(false)
        }
      } catch (error) {
        setError(error.message)

      }
    }
    loadUsers();
  }, [])


  const handleClick = (user) => {
    console.log('the user to be selected:', user)
    setSelectedUser(user)
  }


  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  }
  if (error) {
    return (<ErrorMessage errorMessage={error} />)
  }
  return (
    <div className=' flex-col m-2 ' >
      <UserProfile user={selectedUser} />
      <UsersList users={users} selectedUser={selectedUser} handleClick={handleClick} />
    </div>
  );
}

export default App;
