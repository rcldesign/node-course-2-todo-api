const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// let id = '5b22d5d803a2bd0950560fcdaaa';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by id ', todo);
// }).catch((e) => console.log(e));

// findbyid
// no user
// was found (log)
// errors

User.findById('5b21b5f2b7510c08d006b8a7').then((user) => {
    if(!user) {
        return console.log('User not found');
    }

    console.log(user);
}).catch((e) => console.log('Error getting user: ' , e));