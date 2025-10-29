
const parent=document.getElementById('parent');
//console.log(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'brown',backgroundColor:'pink'}},"Welcome to React App");

// const li1=React.createElement("li",{},"Java");
// const li2=React.createElement("li",{},"Python");
// const li3=React.createElement("li",{},"React");
// const ul=React.createElement("ul",{style:{backgroundColor:'antiquewhite',color:'brown'}},li1,li2,li3);
// const pic=React.createElement("img",{src:'https://imgcdn.floweraura.com/serene-white-rose-bouquet-9781110fl-C_0.jpg',style:{height:'200px',width:'200px',borderRadius:'50%'}});
// const myName=React.createElement("h2",{style:{color:'#6B1414'}},"Rimjhim Prakash");
// const wrapper1=React.createElement("div",{style:{display:'flex',gap:'100px'}},pic,myName);
// const wrapper=React.createElement("div",{},h2,wrapper1,ul);
const h2=<h2>Hello using JSX</h2>;
const li1=<li>Java</li>;
const li2=<li>Python</li>;
const ul =<ul>{li1}{li2}</ul>
const container=(
    <div>
    {h2}
    {ul}
    </div>
)

root.render(container);


// root.render(h2);