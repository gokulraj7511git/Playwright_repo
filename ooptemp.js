let student3 = {
    name : "Mahesh",
    study(subject){
        return this.name + " is studying " + subject
    }
    }
    //alling the method and storing the returned values
    let result1 = student3.study("IT")
    let result2 = student3.study("Science")
    //printing the returned values
    console.log(result1)
    console.log(result2)
    console.log(student3.name)