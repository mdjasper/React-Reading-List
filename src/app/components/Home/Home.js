import Greeting from '../Greeting';
import Recommendations from "../Recommendations";
import BookSearch from "../BookSearch";
import BookList from "../BookList";

const Home = ({greet = true, greetingAction, name = "World", recommendations}) => (
    <div>
        {greet ? <Greeting name={name} close={greetingAction} /> : null}

        <Recommendations books={recommendations} />
        <BookSearch />
        <BookList zebra title="Reading List">
            <p>hey</p>
            <p>ho</p>
            <p>let's go</p>
        </BookList>

    </div>
);

export default Home;
