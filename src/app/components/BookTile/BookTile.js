export default ({ isbn, title, author, coverImgUrl }) => (
    <div>
        <img src={coverImgUrl} />
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{isbn}</p>
    </div>
)
