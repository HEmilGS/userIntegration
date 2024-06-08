import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import flor from "../../src/assets/flor.svg";
import PrevDescription from "./components/prevDescription";
import CardInfo from "./components/cardInfo.jsx";

const User = () => {
  const { id } = useParams(); // destructure the id from useParams
  const [descriptions, setDescriptions] = useState([]);
  const [users, setUsers] = useState([]);


  // add state for description
  const [form, setForm] = useState({
    description: "",
    prescription: "",
  });

  useEffect(() => {
    console.log("Fetching Description");
    fetchDescription();
    // fetchPrescription();
  }, [id]); // include id as a dependency to re-fetch when id changes


  useEffect(() => {
    fetchUserById();
    fetchDescription();
    // fetchPrescription();
  }, []);


  const fetchDescription = async () => {
    console.log("ID from users", id);
    console.log("Fetching Description");
    const response = await fetch(`http://localhost:3000/descriptions/${id}`); // correct URL concatenation
    const data = await response.json();
    console.log(data);
    setDescriptions(data);
    console.log(data);
    return data;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  

  const fetchUserById = async () => {
    const response = await fetch(`http://localhost:3000/users/` + id);
    const data = await response.json();
    setUsers(data);
    console.log(data);
    return data;
  };

  const handleSubmitUpdate = async () => {
    const response = await fetch(`http://localhost:3000/descriptions/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form), // Include the form data
    });

    if (response.ok) {
      alert("Description and Prescription updated successfully");
      fetchDescription(); // Refresh the descriptions
    //   fetchPrescription();
    } else {
      const errorText = await response.text();
      alert(`Failed to update: ${errorText}`);
    }
  };

  const handleGenerateHelp = async () => {
    const response = await fetch(`http://localhost:3000/chat/gemini`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: form.description }), // Include the prompt from the form
    });
    const data = await response.json();
    console.log(data);
    setForm({ ...form, prescription: data.response });
}
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-screen w-full flex flex-row justify-center items-center">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="mx-4 w-full h-full flex justify-center items-center">
            <CardInfo user={users} />
          </div>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center ">
          <div className="w-full h-3/4 m-4 rounded-2xl flex justify-center items-center flex-col">
            <p>Description</p>
            <textarea
              name="description"
              value={form.description}
              onChange={handleInputChange}
              className="w-full h-1/2 bg-gray-100 rounded-xl"
            />
            <p>Prescription</p>
            <textarea
              name="prescription"
              value={form.prescription}
              onChange={handleInputChange}
              className="w-full h-3/4 bg-gray-100 rounded-xl"
            />
            <div className="flex flex-row justify-center items-center">

            <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 " onClick={handleGenerateHelp}>
            Generate help
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 ml-2"
              onClick={handleSubmitUpdate}
              >
              Save
            </button>
              </div>
          </div>

        </div>

        <div className="w-1/4 h-full flex justify-center items-center outline">
        {/* espacio para el rag */}
        </div>
      </div>
      <div>
      <h1 className="text-medium font-semibold text-gray-800 font-serif ml-4">Previous Descriptions</h1>
      </div>

      <div className=" w-full h-[18rem] overflow-x-scroll flex flex-row">
        <PrevDescription descriptions={descriptions}/> 

      </div>
    </div>
  );
};

export default User;
