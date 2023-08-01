import styles from './SocialMedia.module.css';
import {FaGithub, FaLinkedin} from "react-icons/fa"

const SocialMedia = () => {
    return (
        <>
        <li className={styles.socialMedia__container}>
            <a href="https://github.com/MatheusCarbonari" target='_blank' rel="noreferrer">
                <FaGithub
                    size={35}
                    className={styles.iconStyle}
                />
            </a>
        </li>
        <li className={styles.socialMedia__container}>
            <a>
                <FaLinkedin
                    size={35}
                    className={styles.iconStyle}
                />
            </a>
        </li>
        </>
    )
}

export default SocialMedia;