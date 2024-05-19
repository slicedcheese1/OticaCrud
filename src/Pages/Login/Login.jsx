import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.coluna}>
      <div className={styles.container2}></div> {/* Contêiner da imagem agora vem primeiro */}
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
                <input type="checkbox" />
                Lembre de mim
              </label>
            </div>
            <div className={styles.buttonContainer}>
              <button>Entrar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
