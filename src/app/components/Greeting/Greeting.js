import styles from './Greeting.css';

export default ({name = "World", close}) => (
    <div className={styles.greeting}>
        <h1>Welcome, {name}!</h1>
        <span className={styles.deleteButton} onClick={close}>X</span>
    </div>
);
