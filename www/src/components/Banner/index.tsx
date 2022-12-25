import styles from './Banner.module.scss';

const Banner: React.FC = () => {
    return (
        <header className={styles.banner}>
            <img 
                src='assets/img/banner.png' 
                alt='O banner principal da página do Organo.'
                className={styles.banner__imagem}
            />

        </header>
    );
}

export default Banner;