const Razorpay = require("razorpay");

console.log("RAZORPAY_KEY_ID in razorpay.js:", process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY_KEY_SECRET in razorpay.js:", process.env.RAZORPAY_KEY_SECRET);

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
// const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY_ID,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });
