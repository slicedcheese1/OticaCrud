import React from 'react';
import styles from './Login.module.css';

import './Login.css';

const Login = () => {
  return (
    <section className="coluna">
      <div className="container2-img"></div> {/* Contêiner da imagem agora vem primeiro */}
      <div className="container1">
        <form>
          <div className="header">
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
