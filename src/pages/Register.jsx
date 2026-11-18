import {useState} from "react"
function Register(){
    // let[FirstName,setFirstName]=useState("")
    let[formData,setFormData]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        ConfirmPassword:""
    })
    const updateformData=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }

    function formSubmit(){
        console.log(formData)
    }
    return(
        <section id="register-form>">
            <form>
                <h1>Register</h1>
                <div>
                    <label>First Name</label>
                    <input type="text" name="FirstName" onInput={updateformData}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="LastName" onInput={updateformData} />
                </div>
                <div>
                    <label>Email</label>
                <input type="email" name="Email" onInput={updateformData}/>
                </div>
                <div>
                    <label>Create Password</label>
                <input type="password" name="Password" onInput={updateformData}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                <input type="password" name="ConfirmPassword" onInput={updateformData} />    
                </div>
                <div>
                    <button type="button" onClick={formSubmit}>SignUp   
                        </button>
                </div>         
            </form>
        </section>
    )
}
export default Register