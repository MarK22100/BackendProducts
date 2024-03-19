const ProductModel =  require("../models/ProductModel")
const helpers = require('../utils/helpersFuntion.js')

class ProductController{
    async CreateProduct(title, description, category){
        try {
            if (!helpers.validateTitle(title)||!helpers.validateDescription(description)||!helpers.validateCategory(category)){
                throw new Error("Error en alguno de los campos")
            }

            const product = new ProductModel({
                title:title,
                description:description,
                category:category
            })

            await product.save();

        } catch (error) {
            throw error
        }
    }
    async GetAllProductos(){
        try {
            const products = await ProductModel.find()
            return products;
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductController;