// import mongoose from "mongoose";

// const connectDB = async () => {
//     mongoose.connection.on('connected', () => {
//         console.log("DB Connected");
//     });

//     await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`);
// };

// export default connectDB;
/*
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); // Exit if connection fails
    }
};

export default connectDB;
*/
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // Removed deprecated options

        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); // Exit if connection fails
    }
};

export default connectDB;
