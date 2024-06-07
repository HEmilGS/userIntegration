import Form from '../register/components/Form';


function Register() {
    return (
        <div className='bg-[#7ed7e2] h-screen flex flex-row justify-center items-center'>
                <div className='bg-white w-1/2 h-3/4 rounded-3xl flex justify-center items-center flex-col' >
                    <h1 className='text-2xl mb-3'>Create account</h1>
                    <Form />
            </div>
        </div>
    );
}

export default Register;
