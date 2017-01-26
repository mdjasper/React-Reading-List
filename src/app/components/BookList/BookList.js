import styles from './BookList.css';
import classes from 'join-classnames';

export default ({title, zebra, children, className}) => (
    <div>
        {title ? <h3 className={styles.listTitle}>{title}</h3> : ''}
        <ul className={classes(styles.bookList, className, zebra ? styles.alternating : "")}>
            {children}
        </ul>
    </div>
);
