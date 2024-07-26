import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserProfile from './component/UserProfile';



const Card = ({ user,isSelected,onClick }) => {
  return (
    <div onClick={onClick} className={`bg-black text-white hover:cursor-pointer shadow-lg rounded-lg p-4 ${isSelected ? 'border-2 border-violet-800' : 'border-2 border-transparent'}`}  >
      <div className='card-item card-gender'>
        <p style={{ marginRight: '2px' }}>{user.gender}</p>
        <p>{user.nat}</p>
      </div>
      <div className='card-item card-user-name'>
        <p>{user.name.title} {user.name.first} {user.name.last}</p>

      </div>
      <div className='card-item card-user-email'>
        <p>{user.email}</p>
      </div>

    </div>
  )
}

function App() {
  const [userdata, setUserData] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    try {
      axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
        .then(r => {
          console.log(r.data.results)
          setUserData(r.data.results)
          setSelectedUser(r.data.results[0])
        }).catch(e => console.error(e))


    } catch (error) {
      console.error('error is ', error);

    }
  }, [])
  const handleClick=(user)=>{
    console.log('the user to be selected:',user)
    setSelectedUser(user)
  }



  return (
    <div className=' flex-col m-4 p-4' >

      <UserProfile user={selectedUser} />

      <div className=' flex flex-wrap -mx-2'>

        {
          userdata.map((user) => (<div key={user.email} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <Card user={user} isSelected={user===selectedUser} onClick={()=>handleClick(user)} key={user.email} /></div>))
        }
      </div>
    </div>
  );
}

export default App;
