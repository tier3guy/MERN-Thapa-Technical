// Requiring Mongoose Package
const mongoose = require("mongoose");

// Creating DataBase 
/*
  Note -> this connect method returns a promise
*/
mongoose.connect("mongodb://localhost:27017/mydb")
.then(() => {
  console.log("connection established");
})
.catch((err) => {
  console.log(err);
});


// Defining the structure of field
const schema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  ctype : String,
  videos : Number,
  author : String,
  active : Boolean,
  date : {
    type : Date,
    default : Date.now()
  }
})


// Creating a collection with a name of 'Collection'
// Here const Collection is a class
const Collection = new mongoose.model("Collection", schema);


//creating a document for the collection of Collection as an instance.
const first__document = new Collection({
  name : "React JS",
  ctype : "MERN",
  videos : 200,
  author : "Technical Thapa",
  active : true,
  date : Date.now()
})

//Saving the document to the collection 
//This is time comsuming and out-dated
first__document.save()
.then(() => console.log("document saved") );


//The mordern and optimal way of creating and saving to the collections
const create_doc = async () => {
  try{
    const second_document = new Collection({
      name : "Front-end",
      ctype : "Front-end",
      videos : 500,
      author : "Avinash",
      active : true
    })
    await second_document.save();
    
  }catch{
    err => console.log(err);
  }
}

create_doc();