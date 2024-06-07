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
        <div className="h-screen w-full flex flex-row justify-center items-center">
            <div className="w-1/2 h-full flex justify-center items-center">
            <div className="mx-4 w-full h-full flex justify-center items-center">
                <CardInfo user={users}/>
            </div>
            </div>
        <div className="w-1/2 h-full flex justify-center items-center">
                
                {/* <PrevDescription descriptions={descriptions} /> Capitalize the component name */}

            <div className="w-full h-1/2 m-4 rounded-2xl flex justify-center items-center flex-col">
                <p>Description</p>
                <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={handleInputChange} 
                    className="w-2/3 h-1/2 bg-gray-100 rounded-xl"
                />
                <p>Prescription</p>
                <textarea 
                    name="prescription" 
                    value={form.prescription} 
                    onChange={handleInputChange} 
                    className="w-2/3 h-1/2 bg-gray-100 rounded-xl"


                />
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
            onClick={handleSubmitUpdate}>click me</button>
            </div>


        </div>
        </div>
    );
};

export default User;
