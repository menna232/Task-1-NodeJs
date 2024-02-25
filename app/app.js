const yargs = require('yargs')
const fs = require("fs")
const customerOpertion = require('../customerOpertions')

yargs.command ({
    command:"add",
describe : "to add a customer ",
builder: {
    fname : {
        describe: "customer's first name",
        demandOption: true,
        type : "string"
    },
    lname : {
    describe: "customer's last name",
    demandOption: true,
    type : "string"
    }
},
handler:(x)=> {
    customerOpertion.addCustomer(x.id , x.fname , x.lname,x.age , x.city)
}
})


yargs.command({
    command:"delete",
    describe : "to delete a customer",
    builder: {
        id:{
            describe:"id of the customer to be deleted",
            demandOption : true,
            type:"string"
        }
    },
    handler:(x)=>{
        customerOpertion.deleteData(x.id)
    }

})


yargs.command ({
    command : "list",
    describe : "to list customers" ,
    handler : () => {
        data10.listData()
    }
    })



yargs.command({
    command: "read",
    describe : "to read customers data",
    builder : {
        id : {
            describe : "this is id desc in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler: (x)=> {
        data10.readData(x.id)
    }
})

