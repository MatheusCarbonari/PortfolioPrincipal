import styles from './CardProjectImage.module.css';


const CardProjectImage = ({imageProject}) => {
    return (
        <div className={styles.cardProjectImage__container}>
            <img src={imageProject} alt='Imagem do projeto em destaque'/>
        </div>
    )
}

export default CardProjectImage;