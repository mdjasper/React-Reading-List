export default ({
    id,
    title,
    author,
    coverImgUrl = "https://books.google.com/googlebooks/images/no_cover_thumb.gif",
    remove,
    markRead
}) => (
    <div data-google-book-id={id}>
        <img src={coverImgUrl} />
        <h3>{title}</h3>
        <h4>{author}</h4>
        {remove && <button onClick={remove}>delete</button>}
        {markRead && <button onClick={markRead}>finished</button>}
    </div>
)
