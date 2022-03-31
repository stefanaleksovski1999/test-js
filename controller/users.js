const User = require('../models/user');
const bcrypt = require('bcryptjs');
const response = require('../lib/response_handler');

const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return response(res, 400, 'Bad request. User exists with the provided email.');
      }
  
      req.body.password = bcrypt.hashSync(req.body.password);
  
      user = await User.create(req.body);
      
  
      response(res, 201, 'New user has been created', { user })
    } catch (error) {
      response(res, 500, error.msg);
    }
  };
  
  
  const login = async (req, res) => {
    try {
     
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            id: user._id,
            email: user.email,
          }
  
          const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: '50m'
          });
  
          response(res, 200, 'You have logged in successfully', { token })
        } else {
          response(res, 401, 'Invalid credentials');
        }
      } else {
        response(res, 401, 'Invalid credentials');
      }
    } catch (error) {
      response(res, 500, error.msg);
    }
  }

  module.exports = { 
    register,
    login
}