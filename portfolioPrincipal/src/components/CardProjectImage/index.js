import { NavLink } from 'react-router-dom';
import styles from './CardProjectImage.module.css';


const CardProjectImage = ({imageProject, endereco}) => {

    function novaAba(url){
        window.open(url);
    }

    return (
        <div className={styles.cardProjectImage__container}>
            
            <img src={imageProject} onClick={() => novaAba(endereco)} alt='Imagem do projeto em destaque'/>
            
        </div>
    )
}

export default CardProjectImage;