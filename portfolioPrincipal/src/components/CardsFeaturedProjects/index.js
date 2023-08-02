import CardProjectImage from '../CardProjectImage';
import styles from './CardsFeaturedProjects.module.css';
import CardProjectText from '../CardProjectText';

const CardsFeaturedProjects = ({imageProject, projectTitle, children, direction}) => {

    if(direction != ""){
        return (
            <div className={styles.cardsFeaturedProjects__container}>
                <CardProjectImage imageProject={imageProject} />
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
                <CardProjectImage imageProject={imageProject} />
            </div>
        )
    }

}

export default CardsFeaturedProjects;