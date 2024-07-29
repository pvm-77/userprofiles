import Card from "./Card"


const UsersList = ({users,selectedUser,handleClick}) => {
  return (
    <div className="flex flex-wrap  justify-center">
      {users?.map((user)=><Card user={user} isSelected={user === selectedUser} onClick={() => handleClick(user)} key={user.email} />)}
      
    </div>
  )
}

export default UsersList