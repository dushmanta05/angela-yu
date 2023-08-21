var student = {
    name: "Dushmanta",
    some: "Angul",
    numer: "9594939291",
    age: "19",

    // add method

    write: function(){
        alert("Start writing")
    }
}

// Uisng a constructor function

function EmployeeDetails (name, id, batch, dept, age){
    this.name= name;
    this.id= id;
    this.batch= batch;
    this.dept= dept;
    this.age= age;
}

var employee1 = new EmployeeDetails("Dushmanta", 15010375, "2023", "Chem", 23)