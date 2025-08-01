const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Database file path
const DB_FILE = path.join(__dirname, 'db.json');

// Initialize database file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ links: [] }, null, 2));
}

// Helper function to read data from the database
function readData() {
    try {
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading database:', err);
        return { links: [] };
    }
}

// Helper function to write data to the database
function writeData(data) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error('Error writing to database:', err);
        return false;
    }
}

// API Routes

// Get all links
app.get('/api/links', (req, res) => {
    const data = readData();
    res.json(data.links);
});

// Get a single link by ID
app.get('/api/links/:id', (req, res) => {
    const data = readData();
    const link = data.links.find(l => l.id === parseInt(req.params.id));
    
    if (!link) {
        return res.status(404).json({ error: 'Link not found' });
    }
    
    res.json(link);
});

// Create a new link
app.post('/api/links', (req, res) => {
    const data = readData();
    const newLink = {
        id: data.links.length > 0 ? Math.max(...data.links.map(l => l.id)) + 1 : 1,
        ...req.body,
        status: req.body.status || 'active',
        createdAt: new Date().toISOString()
    };
    
    data.links.push(newLink);
    
    if (writeData(data)) {
        res.status(201).json(newLink);
    } else {
        res.status(500).json({ error: 'Failed to save link' });
    }
});

// Update a link
app.put('/api/links/:id', (req, res) => {
    const data = readData();
    const index = data.links.findIndex(l => l.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: 'Link not found' });
    }
    
    const updatedLink = {
        ...data.links[index],
        ...req.body,
        updatedAt: new Date().toISOString()
    };
    
    data.links[index] = updatedLink;
    
    if (writeData(data)) {
        res.json(updatedLink);
    } else {
        res.status(500).json({ error: 'Failed to update link' });
    }
});

// Delete a link
app.delete('/api/links/:id', (req, res) => {
    const data = readData();
    const initialLength = data.links.length;
    
    data.links = data.links.filter(l => l.id !== parseInt(req.params.id));
    
    if (data.links.length === initialLength) {
        return res.status(404).json({ error: 'Link not found' });
    }
    
    if (writeData(data)) {
        res.json({ success: true });
    } else {
        res.status(500).json({ error: 'Failed to delete link' });
    }
});

// Serve the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
