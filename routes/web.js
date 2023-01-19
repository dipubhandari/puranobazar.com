
import multer from 'multer'

import express from "express";
import Controller from "../controller/Controller.js";

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {

        cb(null, Math.random() * 10000 + file.originalname)
    }

}); const upload = multer({ storage: storage })


router.post('/createaccount', Controller.createaccount)
router.post('/login', Controller.login)
router.post('/selling', upload.array('file', 9), Controller.Sell)
router.get('/products', Controller.products)
// checking the details of the login user from localstroge 
router.post('/checkuser', Controller.login_user)
// route to get details of the products based on id
router.get('/get-product-details/:id', Controller.getDetails)
router.get('/getuser/:email', Controller.getuser)
// search router
router.get('/search/:search', Controller.search)

export default router