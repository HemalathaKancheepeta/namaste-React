// const headingReact1=React.createElement("h4",
// {id:"heading2",name:"headingName"},
// "Hello World from React!!!");

const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"h1"},"I'm  a h1 Element"),
React.createElement("h2",{id:"h2"},"I'm  a h2 Element")]
),React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"h1"},"I'm  a h1 Element"),
React.createElement("h2",{id:"h2"},"I'm  a h2 Element")]
)]);

const rootReact=ReactDOM.createRoot(document.getElementById("root"));
//rootReact.render(headingReact1);

rootReact.render(parent);