import styles from './AboutMeContact.module.css';

const AboutMeContact = () => {
    return (
        <section className={styles.aboutMeContact__container}>
            <div className={styles.aboutMeContact__title}>
                <h2>Entre em Contato</h2>
                <p>Fico grato por visitar meu portfólio! Se você deseja saber mais sobre meu trabalho, experiências e projetos, ou se gostaria de discutir possíveis oportunidades de colaboração, sinta-se à vontade para entrar em contato comigo. Estou ansioso para trocar ideias e contribuir para futuros projetos emocionantes. Aguardo o seu contato!</p>
            </div>
            <div className={styles.aboutMeContact__content}>
                <h3>Endereço: <p>Jundiai, SP</p> </h3>
                <h3>Telefone: <p>(11) 95558-4152</p> </h3>
                <h3>Email: <p>mrcarbonari95@gmail.com</p> </h3>
            </div>
        </section>
    )
}

export default AboutMeContact;