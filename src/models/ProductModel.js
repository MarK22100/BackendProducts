const mongoose = require('mongoose')
const {Schema}= mongoose;

const ProductSchema = new Schema({
    title:{
        type:String,
        required:[true, "Titulo requerido"],
        minLength:4,
        maxLength:20,
        unique:true
    },
    description:{
        type:String,
        required:[true, "Descripcion requerida"],
        minLength:4,
        maxLength:200 
    },
    category:{
        type:String,
        required:[true, "Categoria requerida"]
    }
})

const ProductModel=mongoose.model("Product", ProductSchema);

module.exports= ProductModel