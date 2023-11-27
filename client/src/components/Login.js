import { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './context/AuthContext';
import { Link } from 'react-router-dom';
function Login() {

   const {auth,setauth}=useContext(AuthContext)
    
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

const navigate=useNavigate();
const registerUser=async(event)=> {
		event.preventDefault()

		const response = await fetch('https://shopifyserver.onrender.com/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
               
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		
		})

		const data = await response.json()
		console.log(data)
        if(data.success){
            const navigateTohome=()=>{
				navigate('/')
            }

				
			setauth({
			...auth,
			email:data.email,
			token:data.token
			})
			localStorage.setItem('auth',JSON.stringify(data))
			toast.success('Logged In Successfully', {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
            navigateTohome();
        } 
        else{
            toast.error('Invalid Credentials', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				}); 
        }    
		
	}

	return (
		<div>
            <Navbar/>
            <div className="container-reg flex flexclm justify-center">
			<h1>Login</h1>
			<form onSubmit={registerUser}>
				
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
				<input className='pointer container-reg-button flex justify-center' type="submit" value="Login" />
			</form>
			<h4><Link to='/auth/register'>Don't have an account ? Register</Link></h4>
		</div>
<ToastContainer />
        </div>
	)
}

export default Login