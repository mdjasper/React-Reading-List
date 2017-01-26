import styles from './Greeting.css';

export default ({name = "World", close}) => (
    <div className={styles.greeting}>
        <h2>Welcome, {name}!</h2>
        <span className={styles.deleteButton} onClick={close}>X</span>
    </div>
);
