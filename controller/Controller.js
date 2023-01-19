// import
import Product__Model from '../model/Product_Model.js'
import User__Model from '../model/User Model.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
class Controller {



    // controller for creating the user

    static createaccount = async (req, res) => {
        try {

            //    getting data from user
            const { name, email, password } = req.body

            // checking if user is enter all filed or not
            if (!(name && email && password)) {
                res.send("Enter all the fields")
                //    const insert =  User__Model.create()
            } //  
            else {
                //    check if email already exist in database or not
                const user = await User__Model.findOne({ email })
                if (user) {
                    res.send('Email already exist')
                }
                else {
                    const insert = new User__Model({
                        name,
                        email,
                        password
                    })
                    if (await insert.save()) {
                        res.send('Congratulation account created')
                    }
                }

            }

        }
        catch (error) {
        }
    }


    //product api
    static products = async (req, res) => {
        const allproducts = await Product__Model.find().sort({ date: 'desc' })
        res.send(allproducts)
        console.log(allproducts)

    }

    // search funtionality


    static search = async (req, res) => {
        try {
            const word = req.params.search
            const find = await Product__Model.find({
                "$or": [
                    { name: { $regex: word } },
                    { categories: { $regex: word } },
                    { description: { $regex: word } },
                    { district: { $regex: word } },
                ]
            })
            if (find) {
                res.send(find)
            }
        } catch (error) {
        }
    }

    // search
    // functin for login 

    static login = async (req, res) => {
        try {
            const { email, password } = req.body
            // check the fileds
            if (!(email && password)) {
                res.send({ login_err: "Enter all fields..." })
            }

            else {

                // check if email exist or not with password
                const user = await User__Model.findOne(
                    {
                        email,
                        password
                    })

                if (user) {
                    res.send(user)
                }
                else {
                    res.send({ login_err: "Please enter correct details" })
                }

            }
            // check the email exist or not

        } catch (error) {
        }



    }

    // selling the products

    static Sell = async (req, res, next) => {
        try {
            // getting the data from user
            const { name, price, ward, categories, district, email, description } = req.body
            // checking all fields are entered or not
            if (!(name && price && categories && district && ward && req.files && description)) {
                res.send({ result: 'All fields are required ? ' })
            }
            const upload = await new Product__Model({
                name: req.body.name,
                price: req.body.price,
                categories: req.body.categories,

                district: req.body.district,
                ward: req.body.ward,
                images: req.files,
                description: req.body.description,

                email: req.body.email
            })
            const save = await upload.save()
            if (save) {
                res.send({ result: "Thanks...You are selling the products.." })
            }
            else {
            }
        } catch (error) {
        }
        next()
    }


    // chekcing the user is logged with right account or not
    static login_user = async (req, res) => {
        try {
            const email = req.body.email
            const check = await User__Model.findOne({ email })
            if (check) {
                res.send(true)
            }
            else {
                res.send(false)
            }
        } catch (error) {

        }
    }
    // get details of the products based on id
    static getDetails = async (req, res) => {
        try {
            const result = await Product__Model.findOne({ _id: req.params.id })
            res.send({ data: result })
        }

        catch (error) {
        }
    }
    // getting the user info seller 
    static getuser = async (req, response) => {
        try {
            const seller = await User__Model.find({ email: req.params.email })
            if (seller) {
                response.send(seller)
            }
            else {
                response.send('Not found')
            }
            response.send('Not found')

        } catch (error) {

        }
    }

}


export default Controller