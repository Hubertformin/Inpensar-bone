import Transaction from "../models/transaction";
import {Router} from 'express';

const TransactionRouter = Router();

TransactionRouter.get('/', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Transaction.find({ userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

TransactionRouter.get('/:id', async (req, res) => {
    // get all users
    try {
    
        const data = await Transaction.findOne({ _id: req.params.id });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

TransactionRouter.post('/', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Transaction.create({ ...req.body, userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

TransactionRouter.put('/:id', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Transaction.updateOne({  _id: req.params.id, userId: req.query.userId }, req.body);

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

TransactionRouter.delete('/:id', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Transaction.deleteOne({  _id: req.params.id, userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

export default TransactionRouter;