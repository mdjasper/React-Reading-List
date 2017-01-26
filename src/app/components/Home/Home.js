import Greeting from '../Greeting';
import Recommendations from "../Recommendations";
import { BookSearch } from "../BookSearch";
import BookList from "../BookList";
import BookTile from "../BookTile";

const Home = ({
    greet,
    greetingAction,
    name = "World",
    recommendations,
    readingList,
    onSearch,
    removeBook
}) => (
    <div>
        <h1>React Reading List </h1>
        {greet ? <Greeting name={name} close={greetingAction} /> : ""}

        <Recommendations onAdd={onSearch} books={recommendations} />
        <BookSearch onSearch={onSearch} />
        {
            readingList.length > 0 ?
                <BookList zebra >
                    {
                        readingList.map((book, i) =>
                            <BookTile
                                key={i}
                                author={book.author}
                                title={book.volumeInfo.title}
                                id={book.id}
                                coverImgUrl={book.thumbnailUrl}
                                remove={() => removeBook(book.id)}
                            />
                        )
                    }
                </BookList> :
                <p>Your reading list is empty.</p>
        }
    </div>
);

export default Home;
