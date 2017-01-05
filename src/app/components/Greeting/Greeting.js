export default ({name, close}) => (
    <div>
        <button onClick={ close }>X</button>
        <h1>Welcome, {name}!</h1>
    </div>
);