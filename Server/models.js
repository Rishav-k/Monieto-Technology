const mongoose = require('mongoose');
//Contest Schema--->> {} //json object-> cont7estID, members ids, name, date-of-the-contest, amount-bet: 500, status: active/inactive

const contestSchema = new mongoose.Schema({
    contestID : Number,
    contestName : String , 
    memberID : [Number],
    contestDate : Number ,
    bet : Number,
    status : String
})
var contestModel = new mongoose.model('contestModel' , contestSchema);

//User Schema --->>
const userSchema = new mongoose.Schema({
    userID : Number,
    name : String ,
    amount : Number ,
    stock : [String],
    profit : Number
});
var userModel = new mongoose.model('UserModel' , userSchema)
//comapny schema -------------------
const  companySchema = new mongoose.Schema({
    name : {
        type : String 
    },
    symbol : {
        type : String ,
        required : true
    },
    return : {
        type : Number  ,
        require : true
    }
});

//mongoose model ----------------------
const Company = new mongoose.model("Company" , companySchema);
module.exports ={contestModel , userModel , Company }
