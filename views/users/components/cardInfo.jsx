import userImage from '../../../src/assets/user.svg';


const CardInfo = ({user}) => {
    return (
        <div className='h-1/2 w-full  flex flex-row justify-start items-center rounded-2xl' >
            <div className=' h-full w-1/2 flex flex-col justify-center items-center'>
            <img src={userImage} alt='user' className='h-40 w-40 rounded-full'/>

            <p className='text-2xl font-semibold text-gray-800 m-1 font-serif '>{user.name}</p>
            <p className='text-lg font-medium m-1 font-serif '>{user.email}</p>
            </div>

            <div className='h-full w-1/2 grid grid-cols-2 justify-items-center content-center '>
           <div className=' m-1.5 bg-gray-100 h-40 w-40 rounded-xl flex justify-start items-center flex-col'>
            <div className='w-full h-1/2 flex justify-start items-start'>
                <h1 className='m-2 font-semibold'>Nationality:</h1>
            </div>

            <div className='w-full h-1/2  flex justify-center items-start mb-5'>

             <p className='text-base  font-medium font-serif'>{user.nacionality}</p>
            </div>
             
              </div>

           <div className=' m-1.5 bg-gray-100 h-40 w-40 rounded-xl flex justify-start items-center flex-col'>
            <div className='w-full h-1/2 flex justify-start items-start'>
                <h1 className='m-2 font-semibold'> Emergency contact:</h1>
            </div>

            <div className='w-full h-1/2  flex justify-center items-start mb-5'>

             <p className='text-base  font-medium font-serif'>{user.emergencycontact}</p>
            </div>
             
              </div>

           <div className=' m-1.5 bg-gray-100 h-40 w-40 rounded-xl flex justify-start items-center flex-col'>
            <div className='w-full h-1/2 flex justify-start items-start'>
                <h1 className='m-2 font-semibold'>Age:</h1>
            </div>

            <div className='w-full h-1/2  flex justify-center items-start mb-5'>

             <p className='text-base  font-medium font-serif'>{user.age} years old</p>
            </div>
             
              </div>

           <div className=' m-1.5 bg-gray-100 h-40 w-40 rounded-xl flex justify-start items-center flex-col'>
            <div className='w-full h-1/2 flex justify-start items-start'>
                <h1 className='m-2 font-semibold'>Ocupation:</h1>
            </div>

            <div className='w-full h-1/2  flex justify-center items-start mb-5'>

             <p className='text-base  font-medium font-serif'>{user.ocupation}</p>
            </div>
             
              </div>

            </div>

        </div>
    )
}

export default CardInfo;