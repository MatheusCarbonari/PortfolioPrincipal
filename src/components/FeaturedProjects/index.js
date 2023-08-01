import CardsFeaturedProjects from '../CardsFeaturedProjects';
import styles from './FeaturedProjects.module.css';
import imageProject from '../../assets/Mask group.png';

const FeaturedProjects = () => {
    return (
        <section className={styles.featuredProjects__container}>
            <CardsFeaturedProjects direction="" imageProject={imageProject}  projectTitle="Landing Page Meteora">
                <p>A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists and more.</p>
            </CardsFeaturedProjects>
            <CardsFeaturedProjects direction="left" imageProject={imageProject}  projectTitle="Landing Page Meteora">
                <p>A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists and more.</p>
            </CardsFeaturedProjects>
        </section>
    )
}

export default FeaturedProjects;