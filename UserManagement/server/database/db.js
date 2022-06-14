import mongoose from "mongoose";

const Connection = async (userName, password) => {
  let URL = `mongodb+srv://${userName}:${password}@cluster0.tdrzw.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error --->", error);
  }
};

export default Connection;
