import mongoose from 'mongoose'
// init database connection
async function initDb() {
    try {
        console.log('connecting to database ...')
        const connection = await mongoose.connect(`mongodb://localhost/localShare`)
        console.log("Success connecting to database!")
    } catch (ex) {
        throw new Error("Couldn't connect to database. Make sure mongodb is running and that the connection uri is correct")
    }
}

export default initDb

