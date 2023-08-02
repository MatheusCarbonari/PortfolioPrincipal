import styles from './CardsOfExperience.module.css';


const CardsOfExperience = ({children, image}) => {
    return (
        <div className={styles.cardsOfExperience__container}>
            <img src={image} alt="Logo da linguagem" />
            <div className={styles.cardsOfExperience__text}>
                {children}
            </div>
        </div>
    )
}

export default CardsOfExperience;