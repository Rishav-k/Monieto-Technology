const {listedCompany} = require('./stockdata.js');
const {Company} = require('./models.js')
console.log(listedCompany.length);

//Company Data Fetch -----------------
var yahooFinance = require('yahoo-finance');

// DataBase Connection ----------------
const mongoose = require('mongoose');

const DB = 'mongodb://monieto:monieto123@ac-ihjuozd-shard-00-00.3t4fjrq.mongodb.net:27017,ac-ihjuozd-shard-00-01.3t4fjrq.mongodb.net:27017,ac-ihjuozd-shard-00-02.3t4fjrq.mongodb.net:27017/?ssl=true&replicaSet=atlas-13mofv-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

mongoose.connect(DB , {
    useNewUrlParser : true,
    useUnifiedtopology : true
}).then(()=>console.log('connected to Stocks Database')).catch((err)=>console.log("not connected " + err));

// saveing company data to data base --------------------
const saveInDB = async ()=>{
    for(var i = 0 ; i < listedCompany.length ; i++){
        const data = new Company({
            name : listedCompany[i].companyName,
            symbol : listedCompany[i].symbol,
            return : listedCompany[i].change
        })
        let d = await Company.find({symbol : data.symbol});
        if(d.length===0){
            data.save();
        }
     }
    let d = await Company.find();
   console.log("Sucessfully saved " + d.length  + " data" )
}
// saveInDB();

//Delete all data from Database ----------------------
const deleteAll = async ()=>{
    const d =  await Company.deleteMany({});
    const d2 = await Company.find({});
    console.log(d2);
}
// deleteAll();

// Update Returns of the companies on the database  -----------------------------------------
const updateReturns = async (START_DATE , END_DATE)=>{
    
    // symbols for all companies for data fetching .ns included ------>>
    var symbols =[];
        for(var i = 0; i < listedCompany.length ; i++){
            symbols.push(listedCompany[i].symbol + ".NS");
        }
    console.log(symbols);

    // fetching data from yahoo finance -->
    yahooFinance.historical({
        symbols: symbols,
        from: START_DATE,
        to: END_DATE
      }, function (err, result) {
        console.log("hello");
        // console.log(result);
        for( prop in result){
            console.log(result[prop]);
            if(result[prop].length>=2){
            var ret = (result[prop][0].close - result[prop][1].close);
            var percentChange =  (ret / result[prop][1].close )*100;
                   console.log(percentChange); 
                   update(percentChange , result[prop][0].symbol );
            }
        }
        console.log("hii")
      });
      
    // var d = await Company.find();
    // console.log(d.length);
    // for(var i = 0 ; i  < 4000 ; i+=2){
    //     console.log(i);
    //     var data = [result[i] , result[i+1]];
    //     console.log(data);
        // var sym = d[i].symbol;
        // symb = sym + ".NS"
        // console.log(sym);
        //  await yahooFinance.historical({
        //      symbol: symb,
        //      from: START_DATE,
        //      to: END_DATE,
        //      period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
        //    }, function (err, quotes) {
        //     //    console.log(quotes);
        //     console.log(i);
        //        var ret = (quotes[0].close - quotes[1].close);
        //        var percentChange =  (ret / quotes[1].close )*100;
        //        console.log(percentChange);  
              
        //        update(percentChange , i);
        //    })
    // }
}
// Update in Database function -----------------
const update = async (percentChange  , sym)=>{
    const d  = await Company.find({});
    sym  = sym.slice(0,-3);
       await Company.updateOne({symbol : sym}, {$set : {return : percentChange}}).then(()=>{console.log(sym + " : " + 
             percentChange  + "updated Successfully")
    });
}
// Funtion to Update todays data ------------------
updateReturns('2023-01-27','2023-01-31');

// module.exports = Company;



 // Users Play

// const sym =['HDFCBANK.NS' , 'TCS.NS' ]
// for( var i = 0 ; i  < 2 ; i++){
// yahooFinance.historical({
//     symbol: sym[i],
//     from: '2023-01-18',
//     to: '2023-01-20',
//     period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
//   }, function (err, quotes) {
//     // return quotes;
//       console.log(err);
//       var ret = (quotes[0].close - quotes[1].close);
//       var percentChange =  (ret / quotes[1].close )*100;
//       console.log(percentChange);   
//   });
    
// }
//  const Element =  mongoose.model('Comapny' , companySchema);
//  console.log(Element);

// const data = new Company({
//     name : "test1",
//     symbol : "TEST1",
//     return : 10,
// });



// var user1 = {
//    name : "xyz",
//    amount : "500",
//    companies : ["RELIANCE", "TCS" ,"HDFCBANK" , "INFY" , "ICICIBANK"]
// };
// var user2 = {
//     name : "abc",
//     amount : "500",
//     companies : ["LICI", "ITC" ,"HDFCBANK" , "INFY" , "BAJFINANCE"],
//     returns: ["18", "22", ""]
//  };
// // console.log(user1.companies);
// var returns = [];
// var profit2 = [];

// var calculate = async ()=>{user1.companies.forEach(company=>{
//     const Products = mongoose.model('Company',  companySchema);
    // var d = await Product.find({symbol : company});
    
    // listedCompany.forEach(obj=>{
    //     // console.log(obj.symbol);
    //     // console.log(company);
    //     if(obj.symbol === company){
    //         // console.log(obj.change);
    //         // return obj.change;
    //         // let ob = {`${obj.symbol}` : `${parseInt(obj.change)*user1.amount}`}
    //         profit1.push(obj.);
    //     }
    // })
// })};
// profit1.sort();
// console.log(profit1);

// user2.companies.forEach(company=>{
    
//     listedCompany.forEach(obj=>{
//         // console.log(obj.symbol);
//         // console.log(company);
//         if(obj.symbol === company){
//             // console.log(obj.change);
//             // return obj.change;
//             profit2.push(parseInt(obj.change)*user1.amount);
//         }
//     })
// })
// profit2.sort();
// console.log(profit2);


