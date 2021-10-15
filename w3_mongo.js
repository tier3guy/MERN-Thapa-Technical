const mongoose = require('mongoose');

// connecting node server with the mongodb
const onConnection = async (connnectionURL) => {
  const connection_made = await mongoose.connect(connnectionURL);
  if(connection_made) console.log("Mongodb has been successfully connected ...");
}
onConnection('mongodb://localhost:27017/test_db');


// creating a schema for our document
const schema = new mongoose.Schema({
  name : {
    required : true,
    type : 'String'
  },
  age : Number,
  sector : Number,
  stream : String,
  active : Boolean
});

// creating a new employee collection and feeding the schema into it.
const employeeCollection = new mongoose.model('Employes', schema);

const insert_document = async (collection, name, age, sector, stream, active) => {
  try{
    const employee = new employeeCollection({
      name : name,
      age : age,
      sector : sector,
      stream : stream,
      active : active
    })

    const inserted = await collection.create(employee);
    if(inserted) console.log("Document has been inserted successfully ...");
  }catch(error){
    console.log(error);
  }
}

/*
insert_document(employeeCollection, 'Avinash', 19, 5, 'IT', true);
insert_document(employeeCollection, 'Abhishek', 20, 5, 'BCA', true);
insert_document(employeeCollection, 'Akash', 20, 5, 'IT', true);
*/

// function to print documents from the collection
const get__documents = async (collection, query) => {
  try{
    const documents = await collection.find(query);
    if(documents) console.log(documents);
  }catch(err){
    console.log(err);
  }
}

get__documents(employeeCollection, {});

// function to upadte values
const update = async (collection, id, toUpdate) => {
  try{
    const updated = await collection.findByIdAndUpdate(
      {_id : id}, 
      { $set : toUpdate},
      {new : true}
    );
    if(updated) console.log('Document has been updated successfully ...', updated);
  }catch(err){
    console.log(err);
  }
}

update(employeeCollection, '616955d701ad6c77307cd723', {name : 'Akash'});

const deleteDocument = async (collection, id) => {
  try{
    const deleted = await collection.findByIdAndDelete({_id : id});
    if(deleted) console.log('Document has been deleted successfully ...', deleted);
  }catch(err){
    console.log(err);
  }
}

deleteDocument(employeeCollection, '61695b3a637c59a43ebe2c1b');