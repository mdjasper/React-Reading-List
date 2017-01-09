import styles from './BookList.css';
import classes from 'classnames';

export default ({title, zebra, children, className}) => (
    <div>
        {title ? <h4 className={styles.listTitle}>{title}</h4> : ''}
        <span className={classes(styles.bookList, className, zebra ? styles.alternating : "")}>
            {children}
        </span>
    </div>
);
