// This is used to accept request & response then in betwwen tranform the JSON. This is custom middle ware.
const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.json({message : err.message , stackTrace : err.stack});

    /**** For more details response for error, Its used in dev, production domain such that. ****/
    switch (statusCode) {
        case 400:
        res.json({title : "Validation faild" ,message : err.message , stackTrace : err.stack});
        break;
        case 404 : 
        res.json({title : "Not Found" ,message : err.message , stackTrace : err.stack});
        break;
    }
}
module.exports = errorHandler;