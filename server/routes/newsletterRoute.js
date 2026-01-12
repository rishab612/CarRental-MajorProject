import express from 'express';
import { sendNewsletter, subscribe } from '../controllers/newsletterController.js';

const newsletterRouter = express.Router();

newsletterRouter.post('/subscribe', subscribe);
newsletterRouter.post('/send', sendNewsletter);

export default newsletterRouter;
