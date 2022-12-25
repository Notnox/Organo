import styles from './RodaPe.module.scss';

const RodaPe: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <a 
                    href='https://pt-br.facebook.com/AluraCursosOnline/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img className={styles.footer__redes} src='/assets/img/fb.png' alt='FaceBook Alura'/>
                </a>
                <a 
                    href='https://twitter.com/AluraOnline'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img className={styles.footer__redes} src='/assets/img/tw.png' alt='Twitter Alura'/>
                </a>
                <a 
                    href='https://www.instagram.com/aluraonline'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img className={styles.footer__redes} src='/assets/img/ig.png' alt='Instagran Alura'/>
                </a>
            </div>
            <img className={styles.footer__logo} src='/assets/img/logo.png' alt='Logo' />
            <label className={styles.footer__label} >Desenvolvido por aluno Alura.</label>
        </footer>
    );
}

export default RodaPe;