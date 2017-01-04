import 'normalize.css';
import styles from './style.css';


export default ({homelink, children}) => (

    <div className={styles.app}>

        <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
        </div>
    </div>
);
