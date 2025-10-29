const parent=document.getElementById('parent')
// console.log(parent)
const root =ReactDOM.createRoot(parent);
// const h2=ReactDOM.createRoot("h2",{style:{color:'brown',backgroundColor:'pink'}});
// root.render(h2);
const myname=<h2>rohan sirohi</h2>
const branch=<h2>cs_b</h2>
const pic=<img src="https://cdn.pixabay.com/photo/2025/04/19/18/20/goose-9544312_1280.jpg" height={"100px"}></img>
const container=(
    <div style={{}}>
        {myname}
        {branch}
        {pic}

    </div>
)
root.render(container);