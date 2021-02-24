import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/20648572?s=460&u=47a55caca6dbc315d1932aaf77eefa20b2002baf&v=4" alt="Wellisson Ribeiro" />
            <div>
                <strong>Wellisson Ribeiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 5
                </p>
            </div>
        </div>
    );
}