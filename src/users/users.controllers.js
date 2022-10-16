const uuid = require('uuid')


const userDB = [
    {
        id: '45551761-48bd-42e9-b247-546580e4059c',
        first_name: 'Aragorn',
        last_name: 'Arathornson',
        email: 'aragorn@lotr.com',
        password: 'arwen',
        birthday: '2931/03/01'
    },
    {
        id: '9702ed4f-9873-4f88-80e0-0568bddb2495',
        first_name: 'Samwise',
        last_name: 'Gamgee',
        email: 'sam@lotr.com',
        password: 'frodo',
        birthday: '2980/01/01'
    }
];

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const data = userDB.find(user => user.id === id)
    return data
}

const createNewUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    userDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser
}

