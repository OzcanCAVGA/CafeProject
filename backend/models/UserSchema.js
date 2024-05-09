const mongoose = require("mongoose");
const Table = require("./TableSchema")
const Order = require("./OrderSchema")
const Comment = require("./CommentSchema")

const UserSchema = {
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: String,
    telephoneNo: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    orders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },

    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table'
    },
    authority: {
        type: String,
        default: "customer"
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
}




const User = mongoose.model("User", UserSchema, "users")
module.exports = User;