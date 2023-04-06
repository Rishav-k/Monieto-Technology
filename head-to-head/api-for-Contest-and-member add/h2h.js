 //json object-> cont7estID, members ids, name, date-of-the-contest, amount-bet: 500, status: active/inactive
const contest = [{
    contestID : 1,
    membersId : [],
    contestName : "contest1",
    contestDate : "02/11/2003",
    bet : 500,
    status : "active" 
},
]
//Members table mto store portfolio: member-id, contest-id and stocks array
const members = [{
    memberID : 101,
    contestID : 1 ,
    stock : ["HDFCBANK" , "RELIANCE" , "TCS" , "TATASTEEL" , "SBIN"]  
},
{
    memberID : 102,
    contestID : 1 ,
    stock : ["LICI", "ITC" ,"HDFCBANK" , "INFY" , "BAJFINANCE"]
},
{
    memberID : 103,
    contestID : 1 ,
    stock : ["IRCTC","TVSMOTOR","CIPLA" ,"TATASTEEL","SBIN"]
}]

 //json object containing 
//API creation
const express = require('express')
const app = express();
const EventEmitter = require('events');
const { contestModel } = require('../Server/models');
const event  = new EventEmitter();



const contestMembers=[];
//API Call member add
app.get('/addMember' , async(req,res)=> {
    await contest.forEach(async(child)=>{
        if(child.contestID === Number(req.query.contestid)){
            var x = await child.membersId.push(req.query.userid);
            if(x){
                console.log("Helllooo "+child.membersId);
            }
        } 
    })
    res.send("HEllo from addMember");
})
// event.on('addMember' , async(ID)=>{
//     var member = members.forEach(member=>{

//     });
//     const d = await contestMembers.push(member);
//     if(d){
//        console.log(contestMembers);
//      }
// })
// event.emit('addMember' , 101);

//API Call contest add
app.post("/addContest" , (req,res)=>{
    
    const data = {
        contestId : Number(req.body.contestId),
        contestName : req.body.contestName,
        contestDate : req.body.contestDate,
        bet : req.body.bet,
        status : req.body.status
    }
    contest.push(data);
})
// const addContest = async()=>{

// }


//API ends
app.listen('5000',()=>{
    console.log("server set at port 5000")}
    );

// timer for contest creation and call the contest-creation-api with stratus active

// timer for contest pairing starts and makes the contest of the same date inactive-> pairing starts 