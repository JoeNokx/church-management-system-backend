import User from "../models/userModel.js";


//GET: fetch all users
 const getAllChurches = async (req, res) => {
    try {
        const user = await User.find();

        //check if users exist
        if (!user) {
            return res.status(404).json({message: "users not found"})
            }
        res.status(201).json(user)
        console.log("users retrieved successfully...")

    } catch (error) {
        res.status(400).json({message: error.message})
        console.log("users could not be found")

    }
};


//GET: fetch a single user
const getSingleChurch =  async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        //check if user exist
         if(!user) {
        res.status(404).json({message: "user not found"})
         }
       
        //single user successful retrieve
        res.status(201).json(user)
        console.log("user retrieved successfully...")

    } catch (error) {
        res.status(400).json({message: error.message})
        console.log("user could not be found")

    }
};



//PUT: update user details
const updateChurch = async (req, res) => {
    try {
       
        //check if new email exist
        if(req.body.email) {
            const emailExisting = await User.findOne({email: req.body.email});
                if(emailExisting && emailExisting._id.toString() !== req.body.email) {
                    return res.status(400).json({message: "email already in use by another user."})
                }
        }

    const user = await User.findByIdAndUpdate(req.params.id, {name: req.body.name, email: req.body.email, role: req.body.role}, {new: true, runValidators:true})

        //check if user exist
        if(!user) {
        return res.status(404).json({message: "user not found"})
        }

        //user successful update
        res.status(201).json(user)
        console.log("user details updated successfully...")

    } catch (error) {
        res.status(400).json({message: error.message})
        console.log("user details could not be updated", error.message)
    }
};


//DELETE: delete a church from database
const deleteChurch =  async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        //check if user exist
         if(!user) {
        return res.status(404).json({message: "user not found"})
         }

        //user successful delete
        res.status(201).json({message: "user deleted successfully", user})
        console.log("user deleted successfully...")

    } catch (error) {
        res.status(400).json({message: error.message})
        console.log("user could not be deleted")
    }
};


export {getAllChurches, getSingleChurch, updateChurch, deleteChurch};
