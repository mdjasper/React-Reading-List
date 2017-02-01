import express from 'express';
import cors from 'cors';

export const router = express.Router();

//const {APP_WEB_BASE_PATH} = process.env;

router.get('/recommendations', cors(), (req, res) => {
    res.send([
        {
            title: "Oh, the Places You'll Go!",
            isbn: "9780679805274"
        },{
            title: "Green Eggs and Ham",
            isbn: "9780001713062"
        },{
            title: "Horton Hears a Who!",
            isbn: "9780385372053"
        },{
            title: "If I Ran the Zoo",
            isbn: "9780394800813"
        },{
            title: "The Foot Book",
            isbn: "9780385373531"
        },{
            title: "Hop on Pop",
            isbn: "9780385372046"
        }

    ]);
});


export default router;
