const UserModel = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req,res) => {
    res.json('test is working')
}

// register user controller
const registerUser = async (req,res) => {
    try {
        const { name, email, password } = req.body;
        // name validation
        if(!name) {
            return res.json({error: 'Name is required'})
        }
        //password validation
        if (!password || password.length < 6) {
            return res.json({error: 'Password is required and should be 6 characters long'})
        }

        // check if user exists
        const exist = await UserModel.findOne({email}) 
        if (exist) {
            return res.json({error: 'Email is taken'})
        }

        //hash password
        const hashedPassword = await hashPassword(password)

        //save user in database
        const user = await UserModel.create({
            name, 
            email, 
            password : hashedPassword
        })
        return res.json({message: 'Login Successful', user})
    } catch (error) {
        console.log(error)
        return res.json({error: 'Something went wrong'})
    }
}

// login user controller
const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;
        // email validation
        if(!email) {
            return res.json({error: 'Email is required'})
        }

        // check if user exists
        const user = await UserModel.findOne({email}) 
        if (!user) {
            return res.json({error: 'User does not exist'})
        }

        //compare password
        const validPassword = await comparePassword(password, user.password)
        if (!validPassword) {
            return res.json({error: 'Password is incorrect'})
        }

        // return user
        return res.json({message: 'Login Successful', user})
        
    } catch (error) {
        console.log(error)
        return res.json({error: 'Something went wrong'})
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}