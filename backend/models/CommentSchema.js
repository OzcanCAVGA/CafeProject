const mongoose = require("mongoose");
const User = require("./UserSchema")



//yorum semasi, kullanicinin hizmete verdigi yorum.
const CommentSchema = {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    content: String,
    date: { type: Date, default: Date.now },
    replies: [ReplySchema],
    rating:
    {
        type: Number,
        min: 1,
        max: 5,
    }
}

//Reply semasi, yorumun altina yapilan yanitlari temsil eder.
const ReplySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    content: String,
    date: { type: Date, default: Date.now },
})



const Comment = mongoose.model("Comment", CommentSchema, "comments");
module.exports = Comment;