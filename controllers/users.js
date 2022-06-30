import { v4 as uuidv4 } from 'uuid';

//all routes in here are starting with /users
let users = []

export const createUser = (req, res) => {
    const user = req.body
    
    // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    users.push({...user, id: uuidv4()})

    res.send(`User with the name ${user.firstname} added to the database!`)
}

export const getUsers = (req, res) =>{
    res.send(users)
}

export const getUser = (req, res) =>{
    const {id} = req.params
    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
}

export const deleteUser = (req, res) =>{
    const {id} = req.params

    users = users.filter((user) => user.id != id )

    res.send(`User with the id ${id} deleted from the database.`)
}

export const updateUser = (req, res) =>{
    const {id} = req.params
    const {firstname, lastname, age} = req.body

    const user = users.find((user) => user.id === id)

    if(firstname)user.firstname = firstname
    if(lastname)user.lastname = lastname
    if(age) user.age = age

    res.send(`User with the id ${id} has been updated`)
    
}