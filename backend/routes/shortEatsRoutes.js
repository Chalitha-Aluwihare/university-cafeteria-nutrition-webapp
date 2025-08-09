import express from 'express';
import { addShortEats , listShortEats, removeShortEats} from '../controllers/shortEatsController.js';
import multer from 'multer';

const shortEatsRoutes = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: 'uploads/shortEats',
    filename: (req,file,cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage:storage});

shortEatsRoutes.post('/add', upload.single('img'), addShortEats);
shortEatsRoutes.get('/list', listShortEats)
shortEatsRoutes.post('/remove',removeShortEats)



export default shortEatsRoutes;