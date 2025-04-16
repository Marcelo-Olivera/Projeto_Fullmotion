import styles from './Login.module.css'

function Login(){
    return(
        <div className={styles.container}>
            <h1>Login</h1>
            <p>Entre com sua conta para acessar o site!</p>
        </div>
    )
}

export default Login;