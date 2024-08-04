const heading =React.createElement("h1",{id:"heading",stl:"gaurav"},"hello world from java script");
const div =React.createElement("div",{id:"parent-div"},heading);
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(div);