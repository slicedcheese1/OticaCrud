import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.coluna}>
      <div className={styles.container2}></div>
      <div className={styles.container1}>
        <form className={styles.form}>
          <div className={styles.header}>
            <h1>Acesse sua Conta</h1>
          </div>
          <div className={styles.inputGroup}>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                className={styles.inputField}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                className={styles.inputField}
              />
            </div>
            <div className={styles.recallForget}>
              <label>
                <input className={styles.checkbox} type="checkbox" />
                Lembre de mim
              </label>
            </div>
            <div>
              <button className={styles.button}>Entrar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
