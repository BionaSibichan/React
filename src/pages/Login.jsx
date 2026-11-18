import { useState } from "react"

function Login(){

	let [formData,setFormData] = useState({
		email :"",
		password:""
	})

	const updateData = (e) =>{
		setFormData({...formData,[e.target.name]:e.target.value})
	}

	function formSubmit(e){
		e.preventDefault()
		console.log(formData)
	}
	return(
		<section id="login-page">
			<form onSubmit={formSubmit}>
				<h1>Login</h1>
				<div>
					<label > Email</label>
					<input type="mail" name="email" onInput={updateData} />
				</div>
				<div>
					<label > Password</label>
					<input type="password" name="password" onInput={updateData}/>
				</div>
				<div>
					<button type="submit" >Login in</button>
				</div>
			</form>
		</section>
	)
}

export default Login