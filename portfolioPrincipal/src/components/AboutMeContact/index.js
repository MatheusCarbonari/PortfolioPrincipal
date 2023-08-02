import SocialMedia from '../SocialMedia';
import styles from './AboutMeContact.module.css';

const AboutMeContact = ({text, title}) => {
    return (
        <section className={styles.aboutMeContact__container}>
            <div className={styles.aboutMeContact__title}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={styles.aboutMeContact__content}>
                <h3>Endereço: <p>Jundiai, SP</p> </h3>
                <h3>Telefone: <p>(11) 95558-4152</p> </h3>
                <h3>Email: <p>mrcarbonari95@gmail.com</p> </h3>
                <SocialMedia/>
            </div>
        </section>
    )
}

export default AboutMeContact;