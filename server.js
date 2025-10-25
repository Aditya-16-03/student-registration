// Import required packages
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// --- CONFIGURATION ---
const app = express();
const port = 3000; // The port our server will run on
const mongoUri = process.env.MONGO_URI; // Your MongoDB connection string

    // --- MIDDLEWARE ---
app.use(cors()); // <-- ADD THIS LINE
app.use(express.json()); // To parse JSON request bodies

// --- DATABASE CONNECTION ---
const client = new MongoClient(mongoUri);
let db;

async function connectToDb() {
    try {
        await client.connect();
        db = client.db("studentData"); // Use a database named "studentData"
        console.log("Successfully connected to MongoDB Atlas!");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1); // Exit if connection fails
    }
}

// --- API ROUTES (ENDPOINTS) ---

// Route to create a new student profile
app.post('/student', async (req, res) => {
    try {
        const studentDetails = req.body;
        // Logic to prevent duplicate register IDs
        const existingStudent = await db.collection('profiles').findOne({ registerId: studentDetails.registerId });
        if (existingStudent) {
            return res.status(409).json({ message: 'A student with this Register ID already exists.' });
        }
        const result = await db.collection('profiles').insertOne(studentDetails);
        res.status(201).json({ message: 'Student created successfully', studentId: result.insertedId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while creating the student profile.' });
    }
});

// Route to update an existing student profile
app.put('/student/:registerId', async (req, res) => {
    try {
        const { registerId } = req.params;
        const updatedDetails = req.body;
        // Don't allow the registerId to be changed in an update
        delete updatedDetails._id; 
        delete updatedDetails.registerId;

        const result = await db.collection('profiles').updateOne(
            { registerId: registerId },
            { $set: updatedDetails }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Student not found.' });
        }
        res.status(200).json({ message: 'Profile updated successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while updating the profile.' });
    }
});


// --- START THE SERVER ---
connectToDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
