import Greeting from '../Greeting';
import Recommendations from "../Recommendations";
import { BookSearch } from "../BookSearch";
import BookList from "../BookList";
import BookTile from "../BookTile";

const Home = ({
    greet = true,
    greetingAction,
    name = "World",
    recommendations,
    readingList,
    onSearch
}) => (
    <div>
        {greet ? <Greeting name={name} close={greetingAction} /> : ""}

        <Recommendations books={recommendations} />
        <BookSearch onSearch={onSearch} />
        <BookList zebra title="Reading List">
                {
                    readingList.map((book, i) =>
                        <BookTile
                            key={i}
                            author={book.author}
                            title={book.volumeInfo.title}
                            id={book.id}
                            coverImgUrl={book.thumbnailUrl}
                        />
                    )
                }
        </BookList>

    </div>
);

export default Home;
