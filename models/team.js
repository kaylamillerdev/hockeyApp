const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teamSchema = new Schema({
    teamName: {
        type: String, // "Tampa Bay Lightning"
        required: true,
        unique: true
    },
    abbreviation: {
        type: String, // "TBL" = 3 letter short version of the teamName
        required: true,
        unique: true
    },
    venue: {
        type: String, // "Amalie Arena - Where is their home ice located / where do they play in home games"
        required: false
    }

}, {timestamps: false})


const Team = mongoose.model('Team', teamSchema);
module.exports = Team;

// Timestamps: false means that we won't get any createdAt or UpdatedAt dateTime fields in our documents