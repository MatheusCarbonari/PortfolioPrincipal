import SocialMedia from '../SocialMedia';
import style from './Contact.module.css';

const Contact = () => {
    return (
        <section className={style.sectionContact__container}>
            <h2>Contato</h2>
            <p>Estou procurando vagas para estagio em programação em geral</p>
            <p>Email: mrcarbonari95@gmail.com</p>
            <p>Telefone: (11) 95558-4152</p>
            <ul>
                <SocialMedia/>
            </ul>
        </section>
    )
}

export default Contact;