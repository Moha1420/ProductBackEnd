const express = require('express');
const router = express.Router();
const {getProduct,
    createProduct,
    updateProduct,
    deleteProduct} = require("../controllers/productControllers");

// router.get('/', getProduct)
// router.post('/',createProduct )

router.route("/").get(getProduct).post(createProduct)

// router.put('/:id',updateProduct )
// router.delete('/:id',deleteProduct )

router.route("/:id").put(updateProduct).delete(deleteProduct)

module.exports = router;