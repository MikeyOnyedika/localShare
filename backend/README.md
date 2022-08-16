# Notes

## Working with mongodb
This project uses mongodb version `4.4.8`, newer versions had problems running on Ubuntu 20.04
Mongodb is a NoSQL database. Data is organized in Collections and Documents analogous to Tables and Rows in SQL databases.
**Mongoose** is a ODM (Object Data Modeling) library for MongoDB. This means that mongoose maps Collections and Docuements in the database into plain javascript object which we can easily work with. Mongoose also helps define and regulate structure for the kind of data we pass into the Collection by defining a schema and using a model to access the Collection.

## Defining a Schema (Collection (i.e Table) structure)

```js
const blog = new Schema({
  title: String,
  published: Boolean,
  tags: [ String ],
  createdAt: Date,
  votes: Number
});
```

## Model
The model is used for performing operations on the database
```js
// 'Blog' argument will be the name of the Collection and the `blog` schema will be applied to all its documents
const Blog = mongoose.model('Blog', blog);
```

## Connecting to mongodb
```js
import mongoose from 'mongoose'
// a typical connection for a remote MongoDb Atlas cluster
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority") 

```

## Some useful Mongoose methods
- `await File.deleteMany({})` - deletes all the documents in the `File` model i.e the `files` collection

## Some mongosh commands
- `db` - represents the current database. Use this to perform queries on the current database
- `show dbs` - to see a list of all created databases
- `db.dropDatabase()` - to delete the current database
- `use Customer` - make the `Customer` database the current database. `Customer` database is automatically created when we first try to make queries to it, if it does not already exist
-  `show collections` or `show tables` or `db.getCollectionNames()` - to show all the collections in the current database. Collections are analogous to Tables in SQL databases
- `db.<collectionName>.find()` - list all documents in the `<collectionName>` collection. E.g `db.files.find()` lists the documents in the `files` collection of the current database. Adding a `.count()` will return how many documents are in the collection. e.g `db.files.find().count()` - returns the number of documents in `files` collection
- `db.<collectionName>.deleteMany({})` - delete all documents in a collection. E.g `db.files.deleteMany({})` deletes all documents in the `files` collection
