import express from 'express';
import Content from '../models/content.js';


const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const contents = await Content.find();
        if(!contents){
            return res.status(401).json({message: "Contents not avialable!"});
        }
        return res.status(200).json({contents})
    } catch (error) {
        return res.status(500).json({message: "Something went wrong!"});
    }
});
router.post('/', async (req, res)=>{
    try {
        const {title, body} = req.body; 
        const content = await Content.create({
            title,
            body,
        });
        return res.status(200).json({message: "Content created successfully!"});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong!"});
    }
});
router.get('/:id',async (req, res) =>{
    try {
        const {id} = req.params;
        const content = await Content.findById(id);
        if(!content){
            return res.status(401).json({message: "Content not found!"});
        }
        return res.status(200).json({content});
    } catch (e) {
        
    }
});
router.put('/:id',async (req, res)=>{
    try {
        const {id} = req.params;
        const {title, body} = req.body;
        const newContent = await Content.findByIdAndUpdate(id,
        {
            title,
            body
        },
        {
            new:true
        });
        return res.status(200).json({message: "Content update successfully!", newContent});
    } catch (error) {
        
    }
});
router.delete('/:id',async (req, res)=>{
    try {
        const {id} = req.params;
        await Content.findByIdAndDelete(id);
        return res.status(200).json({message: "Content delete successfully!"});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong!"});
    }
});

export default router;