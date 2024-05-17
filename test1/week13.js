var students = ["Usman","Ali", "Nouman"]
students.splice(1,0,...["Zahid","Anwar"]);

console.log(...students);
function findAli(std){
if(std=="Ali") return true;
else return false;
}
