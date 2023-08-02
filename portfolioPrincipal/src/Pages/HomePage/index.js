import HomePresentation from "../../components/HomePresentation";
import styles from './HomePage.module.css';
import HomeDescription from "../../components/HomeDescription";
import WorkExperience from "../../components/WorkExperience";
import SkillsImage from "../../components/SkillsImage";
import FeaturedProjects from "../../components/FeaturedProjects";
import Contact from "../../components/Contact";

const HomePage = () => {
    return (
        <main className={styles.mainHomePage__container}>
            <HomePresentation/>
            <HomeDescription/>
            <WorkExperience/>
            <SkillsImage/>
            <FeaturedProjects/>
            <Contact/>
        </main>
    )
}

export default HomePage;