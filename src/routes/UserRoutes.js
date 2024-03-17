const userController = require('../controllers/UserController.js');
const Auth = require('../utils/AuthMiddleWares.js')

const UserRoutes =(base, app) => {

    const controller = new userController();

    app.post(`${base}/createAdmin`, async(req, res)=>{
        try {
            const {email, password} = req.body;
            await controller.CreateNewAdmin(email,password)
            return res.status(201).json({message:"Exito al creal el usuario"})

        } catch (error) {
            console.log('Error a crear el usuario--->',error);
            return res.status(500).json({message:"Ocurrio un error al crear un usuario"})
        }
    })
    
    app.post(`${base}/createUser`, Auth.itsAuth, Auth.isAdmin,  async(req, res)=>{
        try {
            const {email, password} = req.body;
            await controller.CreateNewUser(email,password)
            return res.status(201).json({message:"Exito al creal el usuario"})

        } catch (error) {
            console.log('Error a crear el usuario');
            return res.status(500).json({message:"Ocurrio un error al crear un usuario"})
        }
    })

    /*
    app.post(`${base}/createUser`, async(req, res)=>{
        try {
            const {email, password} = req.body;
            await controller.CreateNewUser(email,password)
            return res.status(201).json({message:"Exito al creal el usuario"})

        } catch (error) {
            console.log('Error a crear el usuario');
            return res.status(500).json({message:"Ocurrio un error al crear un usuario"})
        }
    })
    */
    app.delete(`${base}/delete/:id`, async (req, res)=>{
        try {
            const id = req.params.id;
            const response = await controller.DeleteUserById(id);
            console.log("El usuario eliminado es --->", JSON.stringify(response));
            return res.status(200).json({message:"Se elimino usuario correctamente"})
        } catch (error) {
            console.error("Error al eliminar un usuario --->". error);
            return res.status(500).json({message:"Error al intentar eliminar el usuario"})
        }
    })

    app.post(`${base}/login`, async(req, res, next)=>
    {
        try {
            const response = await controller.Login(req, res);
            return response
        } catch (error) {
            next(error)
        }
    })
};

module.exports=UserRoutes;