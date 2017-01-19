import Greeting from '../Greeting';
import Recommendations from "../Recommendations";
import { BookSearch } from "../BookSearch";
import BookList from "../BookList";
import BookTile from "../BookTile";

const Home = ({greet = true, greetingAction, name = "World", recommendations, readingList, onSearch}) => (
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


/*
<li key={book.id}>{book.volumeInfo.title}</li>
<BookTile
    title={book.}
    author="Dr. Seuss"
    isbn="0307930440"
    coverImgUrl="https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72N0vdX5lY_U8q_9o-__Pgtv_M7y1cwRcxIDhhHE--BK0ZCV1_PFKfzmTS7vWSmPzf5SSQyjcr5p4Ydi-m40YU4Oy3t9f1VD2DTiyzU9M_TKvg2jYRrJ_Pf0PdzGDVxHrNHaV4o&source=gbs_api"
/>
*/
