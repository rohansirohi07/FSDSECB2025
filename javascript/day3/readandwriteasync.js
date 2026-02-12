import fs from "fs/promises"
// console.log(fs);
// const writeFile=async(path,data)=>{
//     try{
//         fs.writeFile(path,data);
//         console.log("data has been written succesfully ")
//     }catch(error){
//         console.log("unable to write ");
//     }
    
// }
// writeFile("./example2.txt","this data has been writtennsuccesfully with async ")
const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        console.log(data);
    } catch (error) {
        console.log("unable to read");
    }
 }
// readFile("./example2.txt");
const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data);
        console.log("Data has been appended successfully.");
    } catch (error) {
        console.log("unable to append file");
    }
}
appendFile("./example.txt","this data has been appended")
