const studentBioData = {
    firstName: "Akash",
    lastName: "Yadav",
    age: 20,
    gender:"male",
    grade:"A",
    courses:["java","Html","CSS","Javascript","ReactJs"],
    address:{
        street: "123 subhash chowk",
        city:"Gurugram",
        state:"Haryana",
        zipcode:"122018",
    },
};


const addTodoList = () =>{
    localStorage.setItem("studentInfo",JSON.stringify(studentBioData));
    alert("data successfully added");

};

const getTodoList = () => {
    const retrievedStudentData = JSON.parse(localStorage.getItem("studentInfo"));
    console.log("Retreived from local storage :", retrievedStudentData);
    alert("data successfully fetched")
};

const removeTodoList = () => {
    const removeInfo = localStorage.removeItem("studentInfo");
    console.log("data after removal : ",removeInfo);
    alert("data successfully removed");
}

var addData = document.getElementById("addBtn");
addData.addEventListener("click", () => {
    addTodoList();
});

document.getElementById("getBtn").addEventListener("click",() => {
    getTodoList();
});

document.getElementById("removeBtn").addEventListener("click", () => {
    removeTodoList();
});