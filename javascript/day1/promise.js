const promise = new Promise((resolve, reject) => {
    let marks = 44;

    if (marks > 33) {
        resolve("pass");
    } else {
        reject("fail");
    }
});

const f1 = async () => {
    try {
        const msg = await promise;
        console.log(msg);
    } catch (error) {
        console.log(error); // prints actual error
    }
};

// f1();
const getData=async()=>{
    try{
     fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));   

   
    } catch(error){
        console.log("error")
    }
}
getData();
