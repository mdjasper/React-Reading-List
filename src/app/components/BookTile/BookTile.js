import styles from './BookTile.css';

export default ({
    id,
    title,
    author,
    coverImgUrl = "https://books.google.com/googlebooks/images/no_cover_thumb.gif",
    remove,
    markRead
}) => (
    <div className={styles.BookTile} data-google-book-id={id}>
        <div className={styles.ImageWrapper}>
            <img src={coverImgUrl} />
        </div>
        <div className={styles.DetailWrapper}>
            <h3 className={styles.Title}>{title}</h3>
            <h4 className={styles.Author}>{author}</h4>
            <div className={styles.ButtonWrapper}>
                {remove && <button onClick={remove}>delete</button>}
                {markRead && <button onClick={markRead}>finished</button>}
            </div>
        </div>
    </div>
)
