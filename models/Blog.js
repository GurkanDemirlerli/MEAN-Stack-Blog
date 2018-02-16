const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;



//========================================= CHECKERS ==========================================

//======Title checkers=======

let titleLenghtChecker = (title) => {
    if (!title) {
        return false;
    } else {
        if (title.length < 5 || title.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};

let alphaNumericTitleChecker = (title) => {
    if (!title) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        return regExp.test(title); // Returns true or false
    }
};

//======Body checkers=====

let bodyLengthChecker = (body) => {
    if (!body) {
        return false;
    } else {
        if (body.length < 5 || body.length > 1000) {
            return false;
        } else {
            return true;
        }
    }
};

//======Comment Checkers============

let commentLengthChecker = (comment) => {
    if (!comment[0]) {
        return false;
    } else {
        if (comment[0].length < 8 || comment[0].length > 35) {
            return false;
        } else {
            return true;
        }
    }
};

//====================================================== VALIDATORS ==================================

//====Title validators====
const titleValidators = [{
    validator: titleLenghtChecker,
    message: 'Title must be more than 5 characters but no more than 50'
}, {
    validator: alphaNumericTitleChecker,
    message: 'Title must be alphanumeric'
}];

//====Body validators===
const bodyValidators = [{
    validator: bodyLengthChecker,
    message: 'Body must be more than 5 character but no more than 1000'
}];

//====Comment validators=====
const commentValidators = [{
    validator: commentLengthChecker,
    message: 'Comment must be at least 1 characters but no more than 200'
}];

//====SCHEMA===
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        validate: titleValidators
    },
    body: {
        type: String,
        required: true,
        validate: bodyValidators
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    likes: {
        type: Number,
        default: 0
    },
    likedBy: {
        type: Array
    },
    dislikes: {
        type: Number,
        default: 0
    },
    dislikedBy: {
        type: Array
    },
    comments: [{
        comment: {
            type: String,
            validate: commentValidators
        },
        commentator: {
            type: String
        }
    }]
});

module.exports = mongoose.model('Blog', blogSchema);