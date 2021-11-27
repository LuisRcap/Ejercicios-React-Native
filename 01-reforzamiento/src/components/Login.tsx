
const Login = () => {

    

    return (
        <>
            <h3>Login</h3>

            <div className="alert alert-info" >
                Validando...
            </div>

            <div className="alert alert-danger" >
                No autenticado
            </div>

            <div className="alert alert-success" >
                Autenticado
            </div>

            <button
                className="btn btn-primary me-2"
            >
                Login
            </button>

            <button
                className="btn btn-danger"
            >
                Loout
            </button>

        </>
    )
}

export default Login;