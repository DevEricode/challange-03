import mongoose from 'mongoose';

class DatabaseConnection {
    private uri: string;
    constructor(uri: string) {
        this.uri = uri;
    }
    public async connect() {
        try {
            await mongoose.connect(this.uri);
            console.log('Connected to the database!');
        } catch (exception) {
            console.error('Error connecting to the database', exception);
        }
    }
    public async disconnect() {
        try {
            await mongoose.disconnect();
        } catch (exception) {
            console.error('Error disconnecting to the database', exception);
        }
    }
}

export default DatabaseConnection;