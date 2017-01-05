import Greeting from '../Greeting';
import Recommendation from "../Recommendation";

const Home = ({greet = true, greetingAction, name = "World", recommendations}) => (
    <div>
        {greet ? <Greeting name={name} close={greetingAction} /> : null}

        <Recommendation books={recommendations} />

    </div>
);

export default Home;