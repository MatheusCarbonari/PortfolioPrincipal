import styles from './CardsEducation.module.css';

const CardsEducation = ({imagem, nome, tipo, plataforma, ano, descricao}) => {

    return (
        <div className={styles.cardsEducation__container}>
            <div className={styles.cardsEducation__info}>
                <h4>Nome: {nome}</h4>
                <h5>Tipo: {tipo}</h5>
                <h5>Instituição: {plataforma}</h5>
                <h5>Ano: {ano}</h5>
                <p>Descrição:{descricao}</p>
            </div>
        </div>
    )
}

export default CardsEducation;