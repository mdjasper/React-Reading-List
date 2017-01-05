import Greeting from '../Greeting';

const Home = ({greet = true, greetingAction, name = "World"}) => (
    <div>
        {greet ? <Greeting name={name} close={greetingAction} /> : null}
    </div>
);

export default Home;