const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const messageSchema = new mongoose.Schema({
    text: String,
    createdAt: { type: Date, default: Date.now },
    isTestMessage: Boolean
});

const Message = mongoose.model('Message', messageSchema);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.get('/test', async (req, res) => {
    try {
        const message = await Message.findOneAndUpdate(
            { isTestMessage: true },
            { 
                text: 'Hello from the API! 👋 The API and MongoDB are working!',
                isTestMessage: true 
            },
            { 
                upsert: true, 
                new: true,
                setDefaultsOnInsert: true
            }
        );
        
        res.json({ 
            message: message.text,
            status: 'success'
        });
    } catch (error) {
        console.error('Database operation failed:', error);
        res.status(500).json({ 
            message: 'Database operation failed',
            error: error.message
        });
    }
});

app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/messages', async (req, res) => {
    try {
        const message = await Message.create({
            text: req.body.text
        });
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`API server running on port ${port}`);
}); 