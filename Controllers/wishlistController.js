const wishlist = require('../Models/wishlistModel')

exports.addToWishlist = async (req,res)=>{
    const {id,title,price,description,category,image,rating} = req.body
    const userId = req.payload
    try{
        const existingProduct = await wishlist.findOne({id,userId})
        if(existingProduct){
            res.status(406).json("Product already available in your wishlist...")
        }else{
            const newProduct = new wishlist({
                id,title,price,description,category,image,rating,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }

    }catch(err){
        res.status(401).json(err)
    }
}

exports.getWishlist = async(req,res)=>{
    const userId = req.payload
    try{
        const allProducts = await wishlist.find({userId})
        res.status(200).json(allProducts) 

    }catch(err){
        res.status(401).json(err)
    }
}

exports.removeWishlist = async (req,res)=>{
    const {id} = req.params
    try{
        const removeItem = await wishlist.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
    }catch(err){
        res.status(401).json(err)
    }
}