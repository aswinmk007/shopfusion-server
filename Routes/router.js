const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')
const cartController = require('../Controllers/cartController')

const router = new express.Router()

//get all products
router.get('/all-products',productController.getAllProductsController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//add to wishlist
router.post('/user/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlist)

//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

//get a product
router.get(`/:id/get-a-product`,productController.getAProduct)

//remove wishlist
router.delete('/remove-wishlist/:id/item',jwtMiddleware,wishlistController.removeWishlist)

//add to cart
router.post('/user/add-to-cart',jwtMiddleware,cartController.addToCart)

//get cart
router.get('/get-cart',jwtMiddleware,cartController.getCart)

//remove cartitem
router.delete('/remove-cartItem/:id/item',jwtMiddleware,cartController.removeCartItem)

//increment cart item
router.get('/:id/increment-cart',jwtMiddleware,cartController.incrementCartItem)

//decrment cart
router.get('/:id/decrement-cart',jwtMiddleware,cartController.decrementCartItem)

//empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)

module.exports = router