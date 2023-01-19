import mongoose from "mongoose"

const dbcon = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'puranobazar',
        }
        const result = await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        if (result) {
            console.log("DATABASE CONNENCTED")
        }
    }
    catch (err) {
        console.log(err)
    }
}

export default dbcon