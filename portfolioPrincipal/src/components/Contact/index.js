import SocialMedia from '../SocialMedia';
import style from './Contact.module.css';

const Contact = () => {
    return (
        <section className={style.sectionContact__container}>
            <h2>Contato</h2>
            <p>Estou empenhado em iniciar minha jornada profissional através de um estágio enriquecedor. Minha paixão pela aprendizagem e contribuição me motiva a buscar oportunidades que me permitam crescer e desenvolver habilidades práticas. Estou pronto para agregar valor e aprender com uma equipe dinâmica. Aguardo ansiosamente por essa oportunidade de crescimento mútuo.</p>
            <p>Email: mrcarbonari95@gmail.com</p>
            <p>Telefone: (11) 95558-4152</p>
            <ul>
                <SocialMedia/>
            </ul>
        </section>
    )
}

export default Contact;