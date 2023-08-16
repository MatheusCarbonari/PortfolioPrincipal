import CardsFeaturedProjects from '../CardsFeaturedProjects';
import styles from './FeaturedProjects.module.css';

// imagens para o destaque
import imageProject from '../../assets/Captura_helloWord.PNG';
import imageProject2 from '../../assets/Captura_meteora.PNG'

const enderecoProject = "https://blog-hello-word.vercel.app/"
const enderecoProject2 = "https://meteora-challange.vercel.app/"

const FeaturedProjects = () => {
    return (
        <section className={styles.featuredProjects__container}>
            <CardsFeaturedProjects direction="" imageProject={imageProject} endereco={enderecoProject} projectTitle="Blog Hello Word">
                <p>Projeto desenvolvido para ser um blog. Podendo ser usado até como Portfólio. Foi construído o React Js, e com enfase na arvore de rotas do DOM, com react-router-dom.</p>
            </CardsFeaturedProjects>
            <CardsFeaturedProjects direction="left" imageProject={imageProject2} endereco={enderecoProject2} projectTitle="Landing Page Meteora">
                <p>Projeto desenvolvido para ser uma pagina de um comercio de roupas digitais. Utiliza de HTML, CSS e JS. Faz conexão com API e utiliza de Node.js para simular essa conexão.</p>
            </CardsFeaturedProjects>
        </section>
    )
}

export default FeaturedProjects;