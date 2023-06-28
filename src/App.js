const Pet = () => {
    return React.createElement( "div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h3", {}, "Havanese"),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!")
    )
};

const conteiner = document.getElementById('root');
//ReactDOM.render(conteiner, <App />);
const root = ReactDOM.createRoot(conteiner);
root.render(React.createElement(App));