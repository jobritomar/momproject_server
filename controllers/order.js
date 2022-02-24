const Order = require("../models/order.js")

const create = async (req, res) => {


    const order = req.body
    console.log({order})
    try {
        const newOrder = await Order.create({info: order, user: req.session.currentUser})
        res.status(200).json({message: "ok", id: newOrder._id})
    } catch (err) {
        res.status(400).json(err.message).end();
    }

}

const index = async (req, res) => {

        try {
          const items = await Order.find()
          res.status(200).json(items).end();
        } catch (err) {
          res.status(400).json(err.message).end();
        }

}


module.exports = { 
    new: create, 
    index
}