import styles from './SkillsImage.module.css';
import skills from '../../assets/Skills.png';

const SkillsImage = () => {
    return (
        <section className={styles.skillsImage__container}>
            <div>
                <img src={skills} alt='Imagem da combinação das imagens'/>
            </div>
        </section>
    )
}

export default SkillsImage;