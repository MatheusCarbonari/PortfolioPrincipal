import styles from './CardsFeaturedProjects.module.css';
import CardProjectText from '../CardProjectText';
import CardProjectImage from '../CardProjectImage';

const CardsFeaturedProjects = ({imageProject, projectTitle, children, direction, endereco}) => {

    if(direction != ""){
        return (
            <div className={styles.cardsFeaturedProjects__container}>
                <CardProjectImage imageProject={imageProject} endereco={endereco}/>
                <CardProjectText left="left" projectTitle={projectTitle}>
                    {children}
                </CardProjectText>
            </div>
        )
    }
    
    if(direction === ""){
        return (
            <div className={styles.cardsFeaturedProjects__container}>
                <CardProjectText projectTitle={projectTitle}>
                    {children}
                </CardProjectText>
                <CardProjectImage imageProject={imageProject} endereco={endereco}/>
            </div>
        )
    }

}

export default CardsFeaturedProjects;