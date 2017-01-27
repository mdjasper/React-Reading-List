import styles from './BookTile.css';
import classes from 'join-classnames';

export default ({
    id,
    title,
    author,
    read,
    coverImgUrl = "https://books.google.com/googlebooks/images/no_cover_thumb.gif",
    remove,
    toggleRead
}) => (
    <div className={classes(styles.BookTile, read && styles.Dim)} data-google-book-id={id}>
        <div className={styles.ImageWrapper}>
            <img src={coverImgUrl} />
        </div>
        <div className={styles.DetailWrapper}>
            <h3 className={styles.Title}>{title}</h3>
            <h4 className={styles.Author}>{author}</h4>
            <div>
                {read ?
                    <svg viewBox="0 0 32 32"
                        className={styles.Read}
                        onClick={toggleRead}
                    >
                        <path className="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
                    </svg> :
                    <svg viewBox="0 0 32 32"
                        className={styles.Unread}
                        onClick={toggleRead}
                    >
                        <path className="path1" d="M12.42 28.678l-12.433-12.238 6.168-6.071 6.265 6.167 13.426-13.214 6.168 6.071-19.594 19.285zM3.372 16.441l9.048 8.905 16.208-15.953-2.782-2.739-13.426 13.214-6.265-6.167-2.782 2.739z"></path>
                    </svg>

                }
                {remove &&
                    <svg viewBox="0 0 32 32"
                        className={styles.Delete}
                        onClick={remove}
                    >
                        <path className="path1" d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
                    </svg>
                }
            </div>
        </div>
    </div>
)

export const status = (read) => read ? 'Status: read' : 'Status: unread';

/*
<div>
    <svg viewBox="0 0 32 32"
        className={ read ? styles.read : styles.unread }
        onClick={ toggleRead && toggleRead(id) }
    >
        <path className="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
    </svg>
    {remove && <button onClick={remove}>remove</button>}
</div>

*/
