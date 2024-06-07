/*eslint-disable*/
import {useNavigate } from 'react-router-dom';
import userImage from '../../../src/assets/user.svg';

function Card({ user }) {
    console.log("Rendering Card");

    const navigate = useNavigate();

    const handleClick = () => {
        console.log(`Clicked ${user.id}`);
        navigate(`/user/${user.id}`);
    };

    return (
        <div style={{display: 'flex'
        , justifyContent: 'center'
        , alignItems: 'center'
        }}>

        <div style={{
            width: '200px',  // Increased width
            height: '60px',  // Increased height
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',  // Stack children vertically
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px',  // Padding for better spacing
            margin: '5px',  // Margin between cards
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)'  // Optional: Add shadow for better aesthetics
        }} onClick={handleClick}>
            <div><img src={userImage} alt="usuario vro" height={50}/></div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{user.name}</div>
            <div>{user.email}</div>
        </div>
        </div>
    );
}

export default Card;