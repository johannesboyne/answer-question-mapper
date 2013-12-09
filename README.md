# Answer Question Mapper

A simple question and answer mapper.

Example:

```javascript
var answerQuestionMapper = require('./..');
var questions = {
  "my test question?": {
    "foo": {
      "test": "hello world"
    },
    "not_in_master": {
      "this": "is_not_shown"
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
```

`console.log(n_obj);` returns:

```javascript
{ foo: { hey: 'ho', test: 'hello world' },
  not: 'DO NOT CHANGE THIS!' }
```