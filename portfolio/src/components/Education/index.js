import CardsEducation from '../CardsEducation';
import styles from './Education.module.css';
import cursos from '../Json/Cursos.json'

const Education = () => {

    const listCourse = cursos

    return (
        <section className={styles.sectionEducation__container}>
            <h2>Formação Acadêmica:</h2>
            <p>Nesta seção, você encontrará uma descrição sucinta de minhas formações educacionais e qualificações acadêmicas. Abaixo, apresento os cursos, instituições e datas de conclusão que contribuíram para a minha trajetória educacional e aprimoramento profissional.</p>
            <div>
                {listCourse.map((course) => {
                    return <CardsEducation
                                key={course.id}
                                imagem={course.imagem}
                                ano={course.ano}
                                descricao={course.descricao}
                                nome={course.nome}
                                plataforma={course.plataforma}
                                tipo={course.tipo}
                            />
                })}
            </div>
        </section>
    )
}

export default Education;