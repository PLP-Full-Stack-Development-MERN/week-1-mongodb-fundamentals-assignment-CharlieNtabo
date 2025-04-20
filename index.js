// Question 1 

use('library');
db.createCollection('books');

// Question 2

db.books.insertMany([
     {
     title: "A song of ice and water",
     author: "George R Martin",
     publishedYear: 1878,
     genre: "Action",
     ISBN: "12345678"
     },
     {
     title: "Prison Break",
     author: "Michael Scofield",
     publishedYear: 1919,
     genre: "Action",
     ISBN: "98767877"
     },
     {
     title: "The Voyage",
     author: "Sam Altman",
     publishedYear: 2020,
     genre: "Adventure",
     ISBN: "17886435"
     },                                                                                         
     {                                                                                          
     title: "The Alchemist",
     author: "John Wick",
     publishedYear: 2001,                                                                       
     genre: "Sci-Fi",
     ISBN: "56889734"
     },
     {                                                                                          
     title: "Romeo and Juliet",
     author: "Shakespear",
     publishedYear: 1774,                                                                       
     genre: "Romance",
     ISBN: "345908123"
     }]) 

// Question 3

db.books.find();
db.books.find({author: "John Wick"});
db.books.find({publishedYear: {$gt: 2000}});
db.books.updateOne({author: "Sam Altman"}, {$set: {publishedYear: 2019}});
db.books.updateMany({}, {$set: {rating: 4.2}});

// qUESTION 4

db.books.deleteOne({ ISBN: "56889734"});
db.books.deleteMany({genre: "Adventure"})

// Question 5

db.client.insertMany([
     {
     name: "Charles Nyambati",
     email: "charlientr7@gmail.com"
     },
     {
     name: "Professor Gathitu",
     email: "gathituprof@gmail.com"
     },
     {
     name: "Marcus Rashford",
     email: "marcusmbe@gmail.com"
     }
     ]);

     db.products.insertMany([
         {                                                                                          
         name: "Airforce",
         price: 1600,                                                                               
         category: "sneakers",
         stock: 15                                                                                  
         },                                                                                         
         {                                                                                          
         name: "Nike",
         price: 2700,                                                                               
         category: "shoes",
         stock: 7
         },                                                                                         
         {                                                                                          
         name: "Lexus",
         price: 2000000,                                                                            
         category: "vehicle",
         stock: 3                                                                                   
         }                                                                                          
         ]);

         db.orders.insertOne({
             '1': ObjectId('680514ebb3a4742d14b5f89f'), items: [{ '0': ObjectId('680515feb3a4742d14b5f8a1'), quantity: 8}]
            })

// Question 6

db.books.aggregate([
    {$group: {_id: "$genre", total: {$sum: 1}}}])

db.books.aggregate([
    {$group: {_id: null, average: { $avg: "$publishedYear"}}}])    

db.books.aggregate([
    {$sort: {rating: -1}}, {$limit: 1}])

// Question 7

db.books.createIndex({ author: 1})