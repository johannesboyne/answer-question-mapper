var test = require('tap').test;
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

test('answer-question-mapper', function (t) {
  t.plan(1);
  var merged = answerQuestionMapper({
    "foo": {
      "hey": "ho"
    },
    "not": "DO NOT CHANGE THIS!"
  },questions, answers).toObject();
  
  t.deepEqual(merged, { foo: { hey: 'ho', test: 'hello world' },
  not: 'DO NOT CHANGE THIS!' }, 'equal objects');
  t.end();
});