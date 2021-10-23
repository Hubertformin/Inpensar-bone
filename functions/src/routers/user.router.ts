import Users from "../models/users";
import {Router} from 'express';

const UserRouter = Router();

UserRouter.get('/', async (req, res) => {
    // get all users
    try {
    
        const data = await Users.find();

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

UserRouter.get('/:uid', async (req, res) => {
    // get all users
    try {
    
        const data = await Users.findOne({ uid: req.params.uid });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

UserRouter.post('/', async (req, res) => {
    // get all users
    try {
    
        const data = await Users.create(req.body);


        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

UserRouter.put('/:id', async (req, res) => {
    // get all users
    try {
    
        const data = await Users.updateOne({ _id: req.params.id }, req.body);


        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});


export default UserRouter;