export default ({ isbn, title, author, coverImgSrc }) => (
    <div>
        <img src={coverImgSrc} />
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{isbn}</p>
    </div>
)
