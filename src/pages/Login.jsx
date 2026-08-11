function Login(){
    return(
        <section id="login-page">
            <form>
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                <input type="email" name="Email" />
                </div>
                <div>
                    <label>Password</label>
                <input type="password" name="Password" />
                </div>
                <div>
                    <button type="submit">SignIn

                    </button>
                </div>
            </form>
        </section>
    )
}
export default Login