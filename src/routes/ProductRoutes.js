const ProductController = require("../controllers/ProductController");
const Auth = require('../utils/AuthMiddleWares')

const ProductsRoutes = (base, app)=>{
    const controller = new ProductController();

    app.post(`${base}/`, Auth.itsAuth, Auth.isAdmin, async(req, res, next)=>{
        try {
            const {title, description, category} =  req.body;
            await controller.CreateProduct(title, description, category);
            return res.status(201).json({message:"Exito al crear el producto"})
        } catch (error) {
            console.error("Error al crear el producto --->", error)
            return res.status(500).json({message:"Ocurrio un error al intentar crear producto"})
        }
    })

    app.get(`${base}/`, async(req, res)=>{
        try {
            const response = await controller.GetAllProductos();
            return res.status(200).json(response);
        } catch (error) {
            console.error("Error al obtener los productos--->", error);
            return res.status(500).json({message:"Error a llamar a los producotos"})
        }
    })
}
module.exports = ProductsRoutes;