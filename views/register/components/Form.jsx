import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        nacionality: '',
        emergencyContact: '',
        age: '',
        ocupation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        console.log(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form with:', form);

        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        if (res.status === 200) {
            alert('User created successfully');
            setForm({
                userName: '',
                email: '',
                nacionality: '',
                emergencyContact: '',
                age: '',
                ocupation: '',
            });
        } else {
            alert('Failed to create user');
        }
    };


    return (
        <form onSubmit={handleSubmit}  className='flex justify-center items-center flex-col'>
            <input
                className="m-4 p-2 outline outline-black rounded-xl w-80 bg-borders"
                type="text"
                name="userName"
                placeholder="Nombre"
                value={form.userName}
                onChange={handleChange}
            />
            <input
                className="m-4 p-2 outline outline-black rounded-xl w-80 bg-borders"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <input
                className="m-4 p-2 outline outline-black rounded-xl w-80 bg-borders"
                type="text"
                name="nacionality"
                placeholder="Nacionality"
                value={form.nacionality}
                onChange={handleChange}
            />
            <input
                className="m-4 p-2 outline outline-black rounded-xl w-80 bg-borders"
                type="text"
                name="emergencyContact"
                placeholder="EmergencyContact"
                value={form.emergencyContact}
                onChange={handleChange}
            />
            <input
                className="m-4 p-2 outline outline-black rounded-xl w-80 bg-borders"
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
            />
            <input
                className="m-4 p-2 outline outline-black rounded-xl w-80 bg-borders"
                name="ocupation"
                placeholder='Ocupation'
                value={form.ocupation}
                onChange={handleChange}
            />
            <button type="submit" className='bg-blue w-1/2 rounded-md mt-3'>
                Submit
            </button>
        </form>
    );
}

export default Form;
