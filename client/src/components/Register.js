import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate,Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [cpassword, setCPassword] = useState('')
const navigate=useNavigate();
const registerUser=async(event)=> {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
                cpassword
			}),
		})

		const data = await response.json()
		
        if(data.success){
            const navigateTologin=()=>{
                navigate('/login')
				
            }
			// console.log(data.message)
			toast.success('Account Created Successfully', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
            navigateTologin();
        }     
		
	}

	return (
		<div>
            <Navbar/>
            <div className="container-reg flex flexclm justify-center">
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input className='container-reg-input'
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
				<input className='container-reg-input'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input className='container-reg-input'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
                <br />
				<input className='container-reg-input'
					value={cpassword}
					onChange={(e) => setCPassword(e.target.value)}
					type="password"
					placeholder="Confirm Password"
				/>
				<br />
				<input className='pointer container-reg-button flex justify-center' type="submit" value="Register" />
			</form>
			<h4><Link to='/login'> Have an account ? Login</Link></h4>
		</div>
<ToastContainer />
        </div>
	)
}

export default App