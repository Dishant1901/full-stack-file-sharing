import File from "../modals/fileModal.js";

export const uploadImage= async (req,res)=>{
    const fileObj={
        path: req.file.path,
        name: req.file.originalname+Date.now()
    }

    try{
       const file= await File.create(fileObj);
        console.log(file);
        // URL trhu whicih file can be dowanloaded
        // 1st part is localhost 
        // 2nd is name of collection
        res.status(200).json({path:`http://localhost:5000/file/${file._id}`})
    }catch(error){
        console.error(error.message);
        res.status(500).json({error:error.message});
    }
}

export const downloadImage =async (req,res)=>{
    try{
        const file =await File.findById(req.params.fileId);

        // increasing downloadContent in DB
        file.downloadContent++;

        // saving file chamges in DB
        await file.save();

        // downloading file using download() in mongoose whcih takes
        // path and name of the fiek to bdownloadwd
        res.download(file.path,file.name);

    }catch(error){
        console.error(error.message);
        return res.status(500).json({error: error.message});
    }
}