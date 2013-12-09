var JSONCombinator = require('json-combinator'),
    fs = require('fs');

module.exports = function (object, questions, answers) {
  var jsonCombinator = new JSONCombinator(object);
  for (var i = 0; i < Object.keys(answers).length; i++) {
    var answer = Object.keys(answers)[i];
    if (answers[answer]) {
      questions[answer].default = null;
      delete questions[answer].default;
      jsonCombinator.add(questions[answer]);
    }
  }

  return jsonCombinator;
};