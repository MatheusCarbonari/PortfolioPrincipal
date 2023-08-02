import styles from './CardProjectText.module.css'

const CardProjectText = ({children, projectTitle, left}) => {
    return (
        <div className={styles.cardProjectText__container}>
            <div className={(`
                ${styles.cardProjectText__title__container}
                ${left === "left" ? styles.left : ""}
            `)}>
                <h4>Projeto em Destaque</h4>
                <h2>{projectTitle}</h2>
            </div>
            <div className={styles.cardProjectText__text__container}>
                {children}
            </div>
        </div>
    )
}

export default CardProjectText;