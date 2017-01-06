import Greeting from '../Greeting';
import Recommendations from "../Recommendations";

const Home = ({greet = true, greetingAction, name = "World", recommendations}) => (
    <div>
        {greet ? <Greeting name={name} close={greetingAction} /> : null}

        <Recommendations books={recommendations} />

    </div>
);

export default Home;
