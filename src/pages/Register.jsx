function Register(){
    return(
        <section id="register-form>">
            <form>
                <h1>Register</h1>
                <div>
                    <label>First Name</label>
                    <input type="text" name="FirstName" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="LastName" />
                </div>
                <div>
                    <label>Email</label>
                <input type="email" name="Email" />
                </div>
                <div>
                    <label>Create Password</label>
                <input type="password" name="Password" />
                </div>
                <div>
                    <label>Confirm Password</label>
                <input type="password" name="ConfirmPassword" />    
                </div>
                <div>
                    <button type="submit">SignUp   
                        </button>
                </div>         
            </form>
        </section>
    )
}
export default Register