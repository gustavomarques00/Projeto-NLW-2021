import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
import { api } from '../../services/api'
import { useEffect } from 'react'

export function MessageList(){
    useEffect(()=> {
        api.get('messages/last3').then(response => {
            console.log(response.data);
        })
    }, [])

    return(
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor do ano!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/gustavomarques00.png" alt="Gustavo Marques"></img>
                        </div>
                        <span>Gustavo Marques</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor do ano!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/gustavomarques00.png" alt="Gustavo Marques"></img>
                        </div>
                        <span>Gustavo Marques</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor do ano!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/gustavomarques00.png" alt="Gustavo Marques"></img>
                        </div>
                        <span>Gustavo Marques</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}