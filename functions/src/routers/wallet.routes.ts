import Wallet from '../models/wallet';
import {Router} from 'express';

const WallerRouter = Router();

WallerRouter.get('/', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Wallet.find({ userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

WallerRouter.get('/:id', async (req, res) => {
    // get all users
    try {
    
        const data = await Wallet.findOne({ _id: req.params.id });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

WallerRouter.post('/', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Wallet.create({ ...req.body, userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

WallerRouter.put('/:id', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Wallet.updateOne({  _id: req.params.id, userId: req.query.userId }, req.body);

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

WallerRouter.delete('/:id', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Wallet.deleteOne({  _id: req.params.id, userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

export default WallerRouter;