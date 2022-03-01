const Order = require("../models/order.js")
const mongoose = require("mongoose");

const create = async (req, res) => {


    const order = req.body
    console.log({order})
    try {
        const newOrder = await Order.create({info: order, user: req.session.currentUser, status:"pending"})
        res.status(200).json({message: "ok", id: newOrder._id})
    } catch (err) {
        res.status(400).json(err.message).end();
    }

}

const index = async (req, res) => {

        try {
          const items = await Order.find().populate(["user", "info._id"])
          return res.status(200).json(items).end();
        } catch (err) {
          res.status(400).json(err.message).end();
        }

}

function isObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
  }



const edit = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isObjectId(id)) {
        res.status(400).json("Id not valid").end();
        }
        const item = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
        }).lean();
    
        res.status(200).json(item).end();
    } catch (err) {
        res.status(400).json(err.message).end();
    }
    
}

const get = async (req, res) => {
    try {
        const items = await Order.findOne({"_id": req.params.id}).populate(["user", "info._id"])
        return res.status(200).json(items).end();
      } catch (err) {
        res.status(400).json(err.message).end();
      }
}


// deletes a task by its id
const deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isObjectId(id)) {
        res.status(400).json("Id not valid").end();
      }
      const order = await Order.findByIdAndDelete(id).lean();
      res.status(200).json(order).end();
    } catch (err) {
      res.status(400).json(err.message).end();
    }
  }


  const listMyOrders = async (req,res) => {

    try {
        const items = await Order.find({ user: req.session.currentUser}).populate(["user", "info._id"])
        return res.status(200).json(items).end();
      } catch (err) {
        res.status(400).json(err.message).end();
      }
  }

module.exports = { 
    new: create, 
    index,
    edit,
    get, 
    delete: deleteOrder,
    listMyOrders
}