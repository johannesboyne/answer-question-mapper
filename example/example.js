var answerQuestionMapper = require('./..');
var questions = {
  "my test question?": {
    "foo": {
      "test": "hello world"
    },
    "not_in_master": {
      "this": "not_shown"
    }
  },
  "do you really want this?": {
    "not": {
      "really": "please"
    }
  }
};
var answers = {
  "my test question?": true,
  "do you really want this?": false
};

var n_obj = answerQuestionMapper({
  "foo": {
    "hey": "ho"
  },
  "not": "DO NOT CHANGE THIS!"
},questions, answers).toObject();

console.log(n_obj);