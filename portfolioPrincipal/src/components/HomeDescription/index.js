import styles from './HomeDescription.module.css';

const HomeDescription = () => {
    return (
        <section className={styles.sectionHomeDescription__container}>
            <div className={styles.descriptionTitle__container}>
                <h1>Eu sou um Desenvolvedor Web</h1>
                <p>Atualmente estou fazendo projetos freelancer.</p>
            </div>
            <div>
                <p>Sou apaixonado por tecnologia. Há 1 ano e meio, iniciei uma jornada autodidata em desenvolvimento de software, cursando ADS e participando de diversos cursos em JS, PHP, Phython, MySQL, HTML. Embora sem emprego fixo, mergulhei em projetos pessoais, aprimorando minhas habilidades individuais. Cada linha de código escrita, cada projeto concluído, foi um passo em direção ao meu objetivo: tornar-me um desenvolvedor de destaque. Estou pronto para contribuir com projetos complexos e agregar valor a uma equipe inovadora. Vamos trilhar juntos um futuro de sucesso!</p>
            </div>
        </section>
    )
}

export default HomeDescription;