import userImage from '../../../src/assets/user.svg';


const CardInfo = ({user}) => {
    return (
        <div             
        style={{
            width: '300px',
            height: '400px',
            backgroundColor: 'bisque',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddding: '10px'
          }}>
            <div><img src={userImage} alt="usuario vro" height={50}/></div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.nacionality}</p>
            <p>{user.emergencycontact}</p>
            <p>{user.age}</p>
            <p>{user.ocupation}</p>
        </div>
    )
}

export default CardInfo;