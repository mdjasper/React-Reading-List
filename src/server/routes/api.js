import express from 'express';
import cors from 'cors';

export const router = express.Router();

//const {APP_WEB_BASE_PATH} = process.env;

router.get('/recommendations', cors(), (req, res) => {
    res.send([{
        title: "Dragons Love Tacos",
        isbn: "0803736800"
    },{
        title: "The Book with No Pictures",
        isbn: "0141361794"
    },{
        title: "The Wonderful Things You Will Be",
        isbn: "0385376715"
    }]);
});


export default router;
