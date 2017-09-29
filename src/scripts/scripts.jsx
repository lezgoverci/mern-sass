const contentNode = document.getElementById('contents');
const continents = ['Africa','America','Asia','Australia','Europe'];
const message = continents.map(c=>`Hello, ${c}!`).join(' ');
const component = <h1>{message}</h1>;
ReactDOM.render(component, contentNode);
