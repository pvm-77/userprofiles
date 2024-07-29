const UserProfile = ({ user }) => {
    if (!user) {
      return <h2>click card to se detail</h2>
  
    }
    return (
      <div className='flex justify-center mb-4 w-full sticky top-0'>
  
        <div className='flex border-2 bg-black text-white p-4 border-violet-800  lg:w-2/4 w-full'>
          <div className='user-image pr-2'>
            <img src={user.picture?.large} alt='img' />
          </div>
          <div className='user-detail-dat'>
            <div> {user.name.title} {user.name.first} {user.name.last} </div>
            <div> {user.email}  </div>
            <div>{user.location.street.number} {user.location.street.name},{user.location.city}</div>
            <div>{user.location.country} {user.location.postcode}</div>
            <div>{user.gender}</div>
          </div>
  
        </div>
  
      </div>
    )
  }

  export default UserProfile;