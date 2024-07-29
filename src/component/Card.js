const Card = ({ user,isSelected,onClick }) => {
  return (
    <div onClick={onClick} className={`lg:max-w-[280px] w-full sm:w-full md:w-1/2 lg:w-1/4 m-2  mb-2 bg-black text-white hover:cursor-pointer shadow-lg rounded-lg p-4 ${isSelected ? 'border-2 border-violet-800' : 'border-2 border-transparent'} ` }  >
      <div className=' text-[#555]'>
        <p style={{ marginRight: '2px' }}>{user.gender}</p>
        <p>{user.nat}</p>
      </div>
      <div className=' font-[800]'>
        <p>{user.name.title} {user.name.first} {user.name.last}</p>

      </div>
      <div className=' text-[#ff4500]'>
        <p>{user.email}</p>
      </div>

    </div>
  )
}


export default Card