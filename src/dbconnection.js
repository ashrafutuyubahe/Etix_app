const connectionString= " mongodb+srv://tuyubaheashrafu2023:XMkYTt.P!7YWkP4@cluster0.r9bxg1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;

 const connection= mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

module.exports= connection;

