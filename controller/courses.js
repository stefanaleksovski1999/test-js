const Course = require('../models/course');
const response = require('../lib/response_handler');



const getAll = async (req, res) => {
  const courses = await Course.find().populate('academy');
     
  console.log()
  res.send({
    error: false,
    message: `All courses from the database`,
    courses
  });
};

const create = async (req, res) => {
  const courses = await Course.create(req.body);

  res.send({
    error: false,
    message: `Course created!`,
    courses
  })
}


const update = async (req, res) => {
  await Course.findByIdAndUpdate(req.params.id, req.body);
  const course = await Course.findById(req.params.id);
                                                      
  res.send({
    error: false,
    message: `Course with id #${user._id} has been updated`,
    course
  });
};





const getDeleted = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Course with id #${req.params.id} has been deleted`
  });
};

module.exports = { 
    getAll,
    create,
    update,
    getDeleted
}