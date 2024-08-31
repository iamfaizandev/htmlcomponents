var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

var connectionString  = "mongodb://127.0.0.1:27017";

app.get("/getusers", (req, res)=>{
    mongoClient.connect(connectionString,(err, clientObject)=>{
        if(!err){
            var dbo = clientObject.db("shopping");
            dbo.collection("tbluser").find({}).toArray((err,documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});

app.post("/registeruser", (req, res)=>{
    var user = {
        "UserId": req.body.UserId,
        "UserName": req.body.UserName,
        "Password": req.body.Password,
        "Age": parseInt(req.body.Age),
        "Email": req.body.Email,
        "Mobile": req.body.Mobile
    };
    mongoClient.connect(connectionString,(err, clientObject)=>{
        if(!err){
            var dbo = clientObject.db("shopping");
            dbo.collection("tbluser").insertOne(user,(err,result)=>{
                if(!err){
                    console.log("Record Inserted");
                } else {
                    console.log(err);
                }
            })
        }
    })
});
app.listen(1400);
console.log("Server Started : http://localhost:1400");
