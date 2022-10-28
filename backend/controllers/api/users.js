
const User = require('../../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

async function create(req, res) {
  try {
    const { password, ...user } = await User.create(req.body);

    // token will be a string
    const token = createJWT(user);

    res.status(201).json({
      status: "success",
      data: {
        user,
        token,
      },
    });
    // res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    console.log(`err.message = ${err.message}`)
    if (err.message.indexOf('duplicate key error') >= 0) {
      res.status(409).json({ "err": "email already exists" })
    }
    console.log(`create err: ${err}`);
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    // this method will not work if select: false is set on the model's password field.
    // I can't currently understand how the comparePassword mongo method works (and it doesn't)
    if (await bcrypt.compare(req.body.password, user.password)) {
      console.log(`they match, says compare`);
    }
    else {
      console.log("they not match. says compare")
      return res.status(401).json({ unauthorized: true })
    }
    Object.keys(user).forEach(key => {
      console.log(`key = ${key}`)
    })
    console.log(`user b4 delete: ${JSON.stringify(user._doc)}`);
    user.password && console.log(`user.password = ${user.password}`)

    // delete like this doesn't error but doesn't work either
    // delete user.password

    // this actually works. mongoose apparently has a secret _doc key.
    user._doc && delete user._doc.password;

    console.log(`users line 38, user= ${JSON.stringify(user)}`);
    if (user === null) return res.status(401).json({ unauthorized: true })
    const token = createJWT(user);
    res.status(201).json({
      status: "success",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.log(`login error: ${error}`)
    res.status(400).json(error);
  }
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  login,
  createJWT,
  checkToken
};

