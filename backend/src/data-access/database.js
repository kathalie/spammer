import mongoose from 'mongoose';

const host = process.env.DB_HOST | '127.0.0.1';
const port = process.env.DB_PORT | '27017'
const database = 'spammerDb';

function connectToDb() {
    mongoose
        .connect(`mongodb://${host}:${port}/${database}`)
        .then(() => {
            console.log('Database connection successful');
        })
        .catch((err) => {
            console.error('Database connection error');
            console.error(err)
        });
}

export default connectToDb;