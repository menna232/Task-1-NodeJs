const fs = require("fs")

const deleteData = (id)=>{
    const allData = loadData()
    const dataToKeep = allData.filter((customer) =>{
        return customer.id !== id
    })
    saveData(dataToKeep)
    console.log("deleted sucessfuly")
}

const addCustomer  = (id, fName,lName,age,city)=>{
    const allData = loadData()
    const ifDuplicated  = allData.filter((customer)=>{
        return customer.is===id
    })
    if(ifDuplicated.length ==0){
        allData.push({
            id:id,
            fName:fName,
            lName:lName,
            age:age,
            city:city
        })
        saveData()
        
    }
    else{
        console.log("duplicated customer")
    }
}
const loadData = ()=>{
    try{
        const customerJson = fs.readFileSync("customres.json").toString()
        return  JSON.parse(customerJson)
    }catch{
        return []
    }
    
}


const  saveData = (allData)=>{
    const customerJson = JSON.stringify(allData)
    fs.writeFileSync("customres.json" ,customerJson)
}

const  displayData = () => {
    const allData = loadData()

    allData.forEach((customer) => {
        console.log(customer.fname , customer.city , customer.age)
    })
}

const readData = (id) => {

    const allData = loadData()

    const customerNeeded = allData.find((customer)=>{
        return  customer.id == id 
    })
    if (customerNeeded) {
        console.log(customerNeeded.fname)
    } else {
        console.log("id needed not found")
    }

}

module.exports={
    deleteData,
    addCustomer,
    displayData,
    readData
}