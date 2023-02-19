
 const fieldAnalyser = (req,res,next)=>{

    if(req.body.name && req.body.email && req.body.pass){
        next()
    }else{
        res.send({"err":"few fields are missing"})
    }


}

module.exports = {fieldAnalyser}