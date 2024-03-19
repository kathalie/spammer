import express from 'express';

import {
    deleteRecipient, getRecipient,
    getRecipients,
    saveRecipient,
    sendSpam,
    updateRecipient
} from "./controllers/recipients.controller.js";
import {deleteTemplate, getTemplate, saveTemplate} from "./controllers/templates.controller.js";

const apiRouter = express.Router();

apiRouter.post('/sendSpam', sendSpam);
apiRouter.post('/recipient', saveRecipient);
apiRouter.put('/recipients/:id', updateRecipient);
apiRouter.delete('/recipients/:id',  deleteRecipient);
apiRouter.get('/recipients/:id', getRecipient);
apiRouter.get('/recipients', getRecipients);

apiRouter.post('/template', saveTemplate);
apiRouter.delete('/templates/:id',  deleteTemplate);
apiRouter.get('/templates', getTemplate);

export default apiRouter;