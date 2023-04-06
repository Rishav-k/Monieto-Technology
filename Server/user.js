const {Company , userModel} = require('./models.js');
//Database Connection --->>
const mongoose = require('mongoose');

const DB = 'mongodb://monieto:monieto123@ac-ihjuozd-shard-00-00.3t4fjrq.mongodb.net:27017,ac-ihjuozd-shard-00-01.3t4fjrq.mongodb.net:27017,ac-ihjuozd-shard-00-02.3t4fjrq.mongodb.net:27017/?ssl=true&replicaSet=atlas-13mofv-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

mongoose.connect(DB , {
    useNewUrlParser : true,
    useUnifiedtopology : true
}).then((event)=>console.log('connected to Stocks Database')).catch((err)=>console.log("not connected " + err));


// saveing company data to data base --------------------
userData = {
    name : "Rishav Kumar",
    amount  : 500 ,
    stock : ["HDFCBANK" , "RELIANCE" , "TCS" , "TATASTEEL" , "SBIN"]  
}
const saveInDB = async (userData)=>{
    const {name , amount ,stock}= userData ;
    console.log(name);
    const data = new userModel({name , amount  , stock});
    let u = await userModel.find({name : data.name});
    if(u.length == 0){
        data.save()
            console.log("Saved Succesfully " + name);
    }
}
// saveInDB(userData);

const update = async (userData)=>{
    // var data  = mongoose.model('User' , userSchema);
    // const u  = await data.find({});
    // sym  = sym.slice(0,-3);
    const {name , stock} = userData;
       await userModel.updateOne({name : name}, {$set : {stock : stock}}).then(()=>{console.log(name + " : " + 
             stock  + " updated Successfully")
    });
}
// update(userData);
 
const updateReturns = async()=>{
    var users = await userModel.find({});
    // console.log(users);
     for(var j = 0 ; j < users.length ; j++){
        let sum = 0;
        var stock = await users[j].stock;
        // console.log(stock);
        
        console.log("------------")
        console.log(stock);
        for(var i = 0 ; i < stock.length ; i++){
            const d = await Company.findOne({symbol : stock[i]});
            // console.log(d.return);
            sum = sum + d.return;
        }
        var returns  = await sum/5;
        await userModel.updateOne({name : users[j].name}, {$set : {profit : returns }}).then(()=>{console.log(users[j].name + " return updated succesfully " + returns)})
    }
}
updateReturns();