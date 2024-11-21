const blogModel = require('../models/blogModel');

exports.getAllBlogController = async (req,res) => {
    try {
        const blogs =await blogModel.find({})
        if(!blogs){
            return res.status(200).send({
                success:false,
                message:'No Blogs Found'
            });
        }
        return res.status(200).send({
            success:true,
            BlogCount:blogs.length,
            message:'All Blogs Lists',
            blogs
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error While Getting Blog',
            error
        });
    }
};


exports.createBlogController = async (req,res) => {
    try {
        const {title,description,image} =req.body 
        //validation 
        if(!title || !description || !image){
            return res.status(400).send({
                success:false,
                message:'Provide All Fields'
            })
        }
        const newBlog = new blogModel({title,description,image})
        await newBlog.save()
        return status(201).send({
            success:true,
            message:'Blog Created',
            newBlog
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success:false,
            message:'Error While Creating blog',
            error
        })
    }
};

//UPDATE BLOG
exports.updateBlogController = () => {};

//SINGLE BLOG
exports.getBlogByIdController = () => {};

// DELETE BLOG
exports.deleteBlogController = () => {};
