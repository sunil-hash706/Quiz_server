const mongoose = require("mongoose");
const QuestionSchema = new mongoose.Schema({
  statement: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  option5: String,
  option6: String,
  option7: String,
  option8: String,
  option9: String,
  option10: String,
  optionCorrect: String,
  subjectCode: String,
});

module.exports = mongoose.model("Questions", QuestionSchema);
