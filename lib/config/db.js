import mongoose from "mongoose"

export const ConnectDb = async () => {
    await mongoose.connect('mongodb+srv://goldy:goldy_next_backend@cluster0.nbpieh8.mongodb.net/todo-app-next')
    console.log('Connected to MongoDB')
}

