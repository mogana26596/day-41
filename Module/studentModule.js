const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createstudent = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("student").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}


module.exports.updatestudent = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("student")
                        .findOneAndUpdate({_id:ObjectId(req.params._id)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}