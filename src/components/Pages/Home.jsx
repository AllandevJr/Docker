import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>
                Bem-Vindo ao <span>Docker</span>
            </h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <LinkButton to="/newproject" text="Criar projeto" />
            <img src={savings} alt="Docker" />
        </section>
    )
}

export default Home