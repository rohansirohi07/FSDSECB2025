// const div= document.getElementsByTagName('div');
// div[0].innerText="ABES Engineering College";
// div[0].style.color='brown';
// div[0].style.backgroundColor="yellow";
// console.log(div);
const div = document.getElementsByClassName('container');

// div[0].innerHTML='<h2 style=color:red>Hii,I am using DOM</h2';
// console.dir(div);


const button = document.getElementById('btn');
console.log(button);
const loading=document.getElementById('disp');
function displayData() {
    loading.innerHTML='<h2>Data is Loading...</h2>';
    // console.log("hiii...inside displaydata");
    setTimeout(()=>{
         const h2 = document.createElement('h2');
    h2.innerText = "CS B students";
    h2.style.backgroundColor = 'cadetblue';
    // console.log(h2);
    div[0].appendChild(h2);
    const img = document.createElement('img');
    img.src = 'https://imgcdn.floweraura.com/serene-white-rose-bouquet-9781110fl-C_0.jpg';
    img.setAttribute('height', 200);
    img.setAttribute('width', 200);
    console.log(img);
    div[0].appendChild(img);
    },2000);

//    loading.innerHTML='';
}
button.addEventListener('click', displayData);