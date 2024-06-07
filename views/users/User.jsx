import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import flor from '../../src/assets/flor.svg';
import PrevDescription from './components/prevDescription';
import CardInfo from './components/cardInfo.jsx';

const User = () => {
    const { id } = useParams(); // destructure the id from useParams
    const [descriptions, setDescriptions] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchDescription = async () => {
        console.log("ID from users", id);
        console.log("Fetching Description");
        const response = await fetch(`http://localhost:3000/descriptions/${id}`); // correct URL concatenation
        const data = await response.json();
        setDescriptions(data);
        console.log(data);
        return data;
    };

    // add state for description
    const [form, setForm] = useState({
        description: "",
        prescription: "",
    });

    useEffect(() => {
        console.log("Fetching Description");
        fetchDescription();
    }, [id]); // include id as a dependency to re-fetch when id changes

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const fetchUserById = async () => {
        const response = await fetch(`http://localhost:3000/users/` + id);
        const data = await response.json();
        setUsers(data);
        console.log(data);
        return data;
    }

    const handleSubmitUpdate = async () => {
        const response = await fetch(`http://localhost:3000/descriptions/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form), // Include the form data
        });

        if (response.ok) {
            alert('Description and Prescription updated successfully');
            fetchDescription(); // Refresh the descriptions
        } else {
            const errorText = await response.text();
            alert(`Failed to update: ${errorText}`);
        }
    }


    useEffect(() => {
        fetchUserById()
        fetchDescription()
    }, []);

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>
                <CardInfo user={users}/>
            </div>
        <div>
            <div>User</div>
            <div>
                <img src={flor} alt="user" style={{ width: '100px', height: '100px' }} />
            </div>
            <div>
                <PrevDescription descriptions={descriptions} /> {/* Capitalize the component name */}
                <p>Description</p>
                <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={handleInputChange} 
                />
                <p>Prescription</p>
                <textarea 
                    name="prescription" 
                    value={form.prescription} 
                    onChange={handleInputChange} 
                />

            </div>
            <button
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer'
                }} onClick={handleSubmitUpdate}>click me</button>
        </div>
        </div>
    );
};

export default User;
