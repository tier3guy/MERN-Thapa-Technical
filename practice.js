const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/practice')
.then(() => console.log("Mongodb connection established ..."))
.catch((err) => console.log(err));

const schema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  standard : String,
  roll : Number,
  active : Boolean
})

const __new_collection__ = new mongoose.model('__new_collection',schema);

/*
const put_data = async () => {
  try{
    const new__document = new __new_collection__({
      name : 'Avinash Gupta',
      standard : 'B.Tech',
      roll : 430420010077,
      active : true
    })
    
    const result = await new__document.save();
    if(result){
      console.log('document inserted !');
    }
  }
  catch{
    (err) => console.log(err);
  }
}

put_data();
*/

const get__data = async () => {
  try{
    const result = await __new_collection__.find();
    console.log(result);
  }
  catch{
    (err) => console.log(err);
  }
}

get__data()