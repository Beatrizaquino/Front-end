const Pet = () => {
    return React.createElement( "div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            animal: "Cat",
            name: "Cosmos",
            breed: "Havanese"
        }),
        React.createElement(Pet, {
            animal: "Cat",
            name: "Snow",
            breed: "Angorá"
        }),
        React.createElement(Pet, {
            animal: "Cat",
            name: "Salem",
            breed: "Russo"
        }),
        ]
    );
};

const conteiner = document.getElementById('root');
//ReactDOM.render(conteiner, <App />);
const root = ReactDOM.createRoot(conteiner);
root.render(React.createElement(App));