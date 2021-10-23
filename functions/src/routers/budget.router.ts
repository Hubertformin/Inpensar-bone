import Budget from '../models/budget';
import {Router} from 'express';

const BudgetRouter = Router();

BudgetRouter.get('/', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Budget.find({ userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

BudgetRouter.get('/:id', async (req, res) => {
    // get all users
    try {
    
        const data = await Budget.findOne({ _id: req.params.id });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

BudgetRouter.post('/', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Budget.create({ ...req.body, userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

BudgetRouter.put('/:id', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Budget.updateOne({  _id: req.params.id, userId: req.query.userId }, req.body);

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

BudgetRouter.delete('/:id', async (req, res) => {
    // get all users
    try {

        if (!req.query.userId) {
            res.status(500).json({message: "Please specify the user id", success: false})
        }
    
        const data = await Budget.deleteOne({  _id: req.params.id, userId: req.query.userId });

        res.status(200).json({data, success: true});

    } catch (e: any) {
        res.status(500).json({message: e.toString(), success: false})
    }
});

export default BudgetRouter;