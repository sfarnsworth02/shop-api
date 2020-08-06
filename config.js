require('dotenv').config();

module.exports = {
    DB: `mongodb+srv://${process.env.USERID}:${process.env.PASSID}@contactsapp-z9t9p.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
}