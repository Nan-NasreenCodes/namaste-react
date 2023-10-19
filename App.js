// const heading = React.createElement("h1", {id:"headingg", abc:"xyz"}, "Hello World from React!");
// console.log(heading);      
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement("div", {id:"parent"},
[React.createElement("div", {id:"child"},[
React.createElement("h1", {id:"h1"}, "Hi I am H1 tag"),
React.createElement("h2", {id:"h2"}, "Hi I am H2 Tag"),
]),
React.createElement("div2", {id:"child2"},
[React.createElement("h1", {id:"h1"}, "Hi I am H1 tag of child 2"),
React.createElement("h2", {id:"h2"}, "Hi I am H2 tag of child 2"),
]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

