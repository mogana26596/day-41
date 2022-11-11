const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.creatementor = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("mentor").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updatementor = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("mentor")
                        .findOneAndUpdate({_id:ObjectId(req.params.mentorId)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}

module.exports.getmentor = async (req,res,next) => {
    try{
        const getData = await mongo.selectedDb.collection("mentor").aggregate ([{
            $lookup: {
               from: "student",
               localField: "studentId",
               foreignField:"studentId",
               as: "student detail"
            }
        }]) .toArray();
      res.send(getData);
    } catch(err) {
     console.error(err);
     res.status(500).send(err);
    }
 }
