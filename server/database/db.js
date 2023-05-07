import mongoose from 'mongoose';
const DBconnection = async()=>{
    const MONGODB_URL=`mongodb://dishantsinghom:fileSharing@ac-8oclaus-shard-00-00.kuejd4t.mongodb.net:27017,ac-8oclaus-shard-00-01.kuejd4t.mongodb.net:27017,ac-8oclaus-shard-00-02.kuejd4t.mongodb.net:27017/?ssl=true&replicaSet=atlas-10q9ch-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
        console.log('database connected succesfully');

    }catch(error) {
        console.error('error while connecting to DB',error.message);
    }
}

export default DBconnection